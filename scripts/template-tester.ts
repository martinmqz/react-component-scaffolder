import fs from 'fs'
import path from 'path'

const componentName = process.argv[2]
if (!componentName) {
  console.error('❌ Please provide a component name to test')
  process.exit(1)
}

const componentPath = path.join('src', componentName, `${componentName}.tsx`)
if (!fs.existsSync(componentPath)) {
  console.error(`❌ Component "${componentName}" not found at ${componentPath}`)
  process.exit(1)
}

const source = fs.readFileSync(componentPath, 'utf-8')

// Check for semantic tag
const tagRegex = /<(\w+)[^>]*>/
const tagMatch = tagRegex.exec(source)
const tagName = tagMatch?.[1]

const allowedTags = ['input', 'label', 'form', 'textarea', 'button'] as const
type AllowedTag = typeof allowedTags[number]

const accessibilityChecks: Record<AllowedTag, RegExp> = {
  input: /aria-label=.*?/, // or id/name matching
  label: /htmlFor=.*?/,
  form: /role="form"/,
  textarea: /aria-label=.*?/,
  button: /type=.*?button/,
}

const result = {
  tag: tagName || 'unknown',
  accessibilityPass:
    tagName && allowedTags.includes(tagName as AllowedTag)
      ? accessibilityChecks[tagName as AllowedTag].test(source)
      : false,
}

console.log(`🧪 Testing "${componentName}"`)
console.log(`→ Detected tag: <${result.tag}>`)
console.log(`→ Accessibility check: ${result.accessibilityPass ? '✅ Passed' : '❌ Failed'}`)
