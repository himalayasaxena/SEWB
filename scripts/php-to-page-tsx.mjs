/**
 * Convert UI PHP page body → Next.js page component TSX.
 * Usage: node scripts/php-to-page-tsx.mjs <input.php> <output.tsx> <ComponentName> [--imports "line1|line2"]
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const hrefMap = {
  index: '/',
  'index.php': '/',
  'about.php': '/about',
  about: '/about',
  'features.php': '/features',
  features: '/features',
  'contact.php': '/contact',
  contact: '/contact',
  'blog.php': '/blog',
  'blog-detail.php': '/blog/sample-post',
  'individuals.php': '/individuals',
  individuals: '/individuals',
  'health-professionals.php': '/health-professionals',
  'health-professionals': '/health-professionals',
  'organisations.php': '/organisations',
  organisations: '/organisations',
  'security.php': '/security',
  security: '/security',
  'testimonial.php': '/testimonial',
  testimonial: '/testimonial',
  'gallery.php': '/gallery',
  gallery: '/gallery',
  'product-list.php': '/product-list',
  'product-list': '/product-list',
  'privacy-policy.php': '/privacy-policy',
  'terms-conditions.php': '/terms-conditions',
  'medical-disclaimer.php': '/medical-disclaimer',
}

const voidTags = new Set([
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

function stripPhpShell(html) {
  let s = html
  s = s.replace(/<\?php[\s\S]*?\?>/gi, '')
  s = s.replace(/<script\b[\s\S]*?<\/script>/gi, '')
  s = s.replace(/<!--[\s\S]*?-->/g, '')
  s = s.replace(/<(\/?)P\b/g, '<$1p')
  return s.trim()
}

function fixAssetPaths(s) {
  return s
    .replace(/src="\.\/assets\//g, 'src="/assets/')
    .replace(/src="assets\//g, 'src="/assets/')
    .replace(/src='assets\//g, "src='/assets/")
    .replace(/url\('assets\//g, "url('/assets/")
    .replace(/url\("assets\//g, 'url("/assets/')
}

function fixHrefs(s) {
  let out = s
  for (const [key, route] of Object.entries(hrefMap)) {
    out = out.replace(new RegExp(`href="${key}"`, 'g'), `href="${route}"`)
    out = out.replace(new RegExp(`href='${key}'`, 'g'), `href='${route}'`)
  }
  return out
}

function classToClassName(s) {
  return s.replace(/\bclass=/g, 'className=')
}

function fixBrTags(s) {
  return s.replace(/<br\s*>/gi, '<br />').replace(/<br\s*\/>/gi, '<br />')
}

function selfCloseVoidElements(s) {
  for (const tag of voidTags) {
    const re = new RegExp(`<${tag}\\b([^>]*?)(?<!/)>`, 'gi')
    s = s.replace(re, (match, attrs) => {
      if (match.endsWith('/>')) return match
      return `<${tag}${attrs} />`
    })
  }
  return s
}

function fixInlineStyles(s) {
  return s.replace(/style="([^"]*)"/g, (_, styleStr) => {
    const parts = styleStr
      .split(';')
      .map((p) => p.trim())
      .filter(Boolean)
    const entries = parts.map((part) => {
      const [prop, ...rest] = part.split(':')
      const value = rest.join(':').trim()
      const camel = prop
        .trim()
        .replace(/-([a-z])/g, (_, c) => c.toUpperCase())
      const jsxValue = /^[\d.]+$/.test(value) ? value : `'${value.replace(/'/g, "\\'")}'`
      return `${camel}: ${jsxValue}`
    })
    return `style={{${entries.join(', ')}}}`
  })
}

function fixAllowFullscreen(s) {
  return s.replace(/allowfullscreen=""/gi, 'allowFullScreen').replace(/allowfullscreen/gi, 'allowFullScreen')
}

function transform(html) {
  let s = stripPhpShell(html)
  s = fixAssetPaths(s)
  s = fixHrefs(s)
  s = classToClassName(s)
  s = fixBrTags(s)
  s = selfCloseVoidElements(s)
  s = fixInlineStyles(s)
  s = fixAllowFullscreen(s)
  return s
}

const args = process.argv.slice(2)
const importsFlag = args.indexOf('--imports')
const extraImports =
  importsFlag >= 0 ? (args[importsFlag + 1] || '').split('|').filter(Boolean) : []
const positional =
  importsFlag >= 0
    ? args.filter((_, i) => i !== importsFlag && i !== importsFlag + 1)
    : args

const [inputRel, outRel, componentName] = positional
if (!inputRel || !outRel || !componentName) {
  console.error(
    'Usage: node php-to-page-tsx.mjs <input.php> <output.tsx> <ComponentName> [--imports "import A|import B"]',
  )
  process.exit(1)
}

const root = path.resolve(__dirname, '..')
const inputPath = path.isAbsolute(inputRel) ? inputRel : path.resolve(root, inputRel)
const outPath = path.isAbsolute(outRel) ? outRel : path.resolve(root, outRel)

const raw = fs.readFileSync(inputPath, 'utf8')
const body = transform(raw)

const importLines = extraImports.length ? `${extraImports.join('\n')}\n\n` : ''

const content = `${importLines}export function ${componentName}() {
  return (
    <>
${body
  .split('\n')
  .map((line) => (line ? `      ${line}` : ''))
  .join('\n')}
    </>
  )
}
`

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, content, 'utf8')
console.log('Wrote', outPath)
