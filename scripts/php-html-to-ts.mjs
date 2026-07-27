/**
 * Extract PHP body HTML → TS export for dangerouslySetInnerHTML (asset + href fixes).
 * Usage: node scripts/php-html-to-ts.mjs ../UI/features.ts src/generated/featuresHtml.ts featuresHtml
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const phpHrefMap = {
  'index.php': '/',
  'about.php': '/about',
  'features.php': '/features',
  'contact.php': '/contact',
  'blog.php': '/blog',
  'blog-detail.php': '/blog/sample-post',
  'individuals.php': '/individuals',
  'health-professionals.php': '/health-professionals',
  'organisations.php': '/organisations',
  'security.php': '/security',
  'testimonial.php': '/testimonial',
  'gallery.php': '/gallery',
  'product-list.php': '/product-list',
  'privacy-policy.php': '/privacy-policy',
  'terms-conditions.php': '/terms-conditions',
  'medical-disclaimer.php': '/medical-disclaimer',
}

function transform(html) {
  let s = html
  s = s.replace(/<\?php\s+include\s+['"]header\.php['"];\s*\?>/gi, '')
  s = s.replace(/<\?php\s+include\s+['"]footer\.php['"];\s*\?>/gi, '')
  s = s.replace(/<script\b[\s\S]*?<\/script>/gi, '')
  s = s.replace(/src="\.\/assets\//g, 'src="/assets/')
  s = s.replace(/src="assets\//g, 'src="/assets/')
  s = s.replace(/src='assets\//g, "src='/assets/")
  s = s.replace(/url\('assets\//g, "url('/assets/")
  s = s.replace(/url\("assets\//g, 'url("/assets/')
  for (const [php, route] of Object.entries(phpHrefMap)) {
    const re = new RegExp(`href="${php.replace('.', '\\.')}"`, 'g')
    s = s.replace(re, `href="${route}"`)
  }
  return s.trim()
}

const [, , inputRel, outRel, exportName = 'html'] = process.argv
if (!inputRel || !outRel) {
  console.error('Usage: node php-html-to-ts.mjs <input.php> <output.ts> [exportName]')
  process.exit(1)
}

const root = path.resolve(__dirname, '..')
const inputPath = path.isAbsolute(inputRel) ? inputRel : path.resolve(root, inputRel)
const outPath = path.isAbsolute(outRel) ? outRel : path.resolve(root, outRel)

const raw = fs.readFileSync(inputPath, 'utf8')
const html = transform(raw)
const escaped = html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(
  outPath,
  `/* eslint-disable sonarjs/no-duplicate-string -- generated from PHP */\nexport const ${exportName} = \`${escaped}\`\n`,
  'utf8',
)
console.log('Wrote', outPath, `(${html.length} chars)`)
