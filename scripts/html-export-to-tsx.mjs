#!/usr/bin/env node
/**
 * Migrates cms/src/generated/*Html.ts template literals → cms/src/components/pages/*.tsx (JSX).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const VOID = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
])

function camelCaseCss(key) {
  return key.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}

function cssToJsxObjectString(css) {
  const parts = css
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
  const props = []
  for (const p of parts) {
    const i = p.indexOf(':')
    if (i === -1) continue
    const rawKey = p.slice(0, i).trim()
    const val = p.slice(i + 1).trim()
    const key = camelCaseCss(rawKey)
    const escaped = val.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
    props.push(`${key}: '${escaped}'`)
  }
  return props.length ? `{{${props.join(', ')}}}` : '{{}}'
}

function stripHtmlComments(html) {
  return html.replace(/<!--[\s\S]*?-->/g, '')
}

function voidTags(html) {
  let out = html
  for (const tag of VOID) {
    const re = new RegExp(`<${tag}([^>]*?)(?<!\/)>`, 'gi')
    out = out.replace(re, `<${tag}$1 />`)
  }
  return out
}

function transformHtml(html) {
  let h = stripHtmlComments(html)
  h = h.replace(/\.\/assets\//g, '/assets/')
  h = h.replace(/href="javascript:;"/g, 'href="#"')
  h = h.replace(/\bclass=/g, 'className=')
  h = h.replace(/\bfor=/g, 'htmlFor=')
  h = h.replace(/\btabindex=/gi, 'tabIndex=')
  h = h.replace(/\bstroke-width=/g, 'strokeWidth=')
  h = h.replace(/\bfill-rule=/g, 'fillRule=')
  h = h.replace(/\bclip-rule=/g, 'clipRule=')
  h = h.replace(/\bstroke-linecap=/g, 'strokeLinecap=')
  h = h.replace(/\bstroke-linejoin=/g, 'strokeLinejoin=')
  h = h.replace(/\bstroke-miterlimit=/g, 'strokeMiterlimit=')
  h = h.replace(/\bclip-path=/g, 'clipPath=')
  h = h.replace(/\ballowfullscreen=""/gi, 'allowFullScreen')
  h = h.replace(/\bcrossorigin=/gi, 'crossOrigin=')
  h = h.replace(/\bmaxlength=/gi, 'maxLength=')
  h = h.replace(/\bcellpadding=/gi, 'cellPadding=')
  h = h.replace(/\bcellspacing=/gi, 'cellSpacing=')
  h = h.replace(/\bcolspan=/gi, 'colSpan=')
  h = h.replace(/\browspan=/gi, 'rowSpan=')
  h = h.replace(/\bframeborder=/gi, 'frameBorder=')
  h = h.replace(/\bcontenteditable=/gi, 'contentEditable=')
  h = h.replace(/\bspellcheck=/gi, 'spellCheck=')
  h = h.replace(/style="([^"]*)"/g, (_, css) => `style=${cssToJsxObjectString(css)}`)
  h = voidTags(h)
  h = h.replace(/\srows="(\d+)"/gi, ' rows={$1}')
  h = h.replace(/\sclassName=""/g, '')
  h = h.replace(/\sclassName=''/g, '')
  h = h.replace(/<P\b/g, '<p')
  h = h.replace(/<\/P>/g, '</p>')
  return h.trim()
}

function extractTemplate(source, exportName) {
  const prefix = `export const ${exportName} = \``
  const start = source.indexOf(prefix)
  if (start === -1) throw new Error(`No template export const ${exportName}`)
  const bodyStart = start + prefix.length
  const bodyEnd = source.indexOf('`', bodyStart)
  if (bodyEnd === -1) throw new Error(`Unclosed template for ${exportName}`)
  return source.slice(bodyStart, bodyEnd)
}

/** [inputFile, outFile, component, extraImport, extraJsxEnd] */
const MAP = [
  ['aboutHtml.ts', 'AboutPage.tsx', 'AboutPage', "import { AboutImpactScript } from '@/components/pages/AboutImpactScript'", '<AboutImpactScript />'],
  [
    'featuresHtml.ts',
    'FeaturesPage.tsx',
    'FeaturesPage',
    "import { FeaturesAosInit } from '@/components/pages/FeaturesAosInit'",
    '<FeaturesAosInit />',
  ],
  ['medical_disclaimerHtml.ts', 'MedicalDisclaimerPage.tsx', 'MedicalDisclaimerPage', '', ''],
  ['terms_conditionsHtml.ts', 'TermsConditionsPage.tsx', 'TermsConditionsPage', '', ''],
  ['privacy_policyHtml.ts', 'PrivacyPolicyPage.tsx', 'PrivacyPolicyPage', '', ''],
  ['testimonialHtml.ts', 'TestimonialPage.tsx', 'TestimonialPage', '', ''],
  ['galleryHtml.ts', 'GalleryPage.tsx', 'GalleryPage', '', ''],
  ['product_listHtml.ts', 'ProductListPage.tsx', 'ProductListPage', '', ''],
  ['securityHtml.ts', 'SecurityPage.tsx', 'SecurityPage', '', ''],
  ['organisationsHtml.ts', 'OrganisationsPage.tsx', 'OrganisationsPage', '', ''],
  ['health_professionalsHtml.ts', 'HealthProfessionalsPage.tsx', 'HealthProfessionalsPage', '', ''],
  ['individualsHtml.ts', 'IndividualsPage.tsx', 'IndividualsPage', '', ''],
  ['contactHtml.ts', 'ContactPage.tsx', 'ContactPage', "import { ContactForm } from '@/components/ContactForm'", ''],
]

const generatedDir = path.join(root, 'src/generated')
const outDir = path.join(root, 'src/components/pages')

for (const [inFile, outFile, comp, imp, end] of MAP) {
  const base = inFile.replace('.ts', '')
  const src = fs.readFileSync(path.join(generatedDir, inFile), 'utf8')
  const body = transformHtml(extractTemplate(src, base))
  const importLine = imp ? `${imp}\n\n` : ''
  const endLine = end ? `\n      ${end}\n` : '\n'
  const tsx = `${importLine}export function ${comp}() {
  return (
    <>
      ${body}
      ${endLine}    </>
  )
}
`
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, outFile), tsx, 'utf8')
  console.log('Wrote', outFile)
}

console.log('Done.')
