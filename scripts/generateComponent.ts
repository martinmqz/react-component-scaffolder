#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import minimist from 'minimist';
import { getTemplateByTag } from './templateFactory';

const args = minimist(process.argv.slice(2));
const name = args._[0];
const lang = args.lang || 'ts';
const withTests = args['with-tests'];
const withStory = args['with-story'];
const withDocs = args['with-docs'];
const explicitTag = args.element?.toLowerCase();
const help = args.help;

if (help || !name) {
  console.log(`
Usage: react-dev-scaffolder <ComponentName> [options]

Options:
  --lang=ts|js         Language output (default: ts)
  --with-tests         Include Jest test file
  --with-story         Include Storybook story file
  --with-docs          Include Markdown props documentation
  --element=<tag>      Override tag detection (e.g. input, form)
  --help               Show this help message
`);
  process.exit(0);
}

const tag = explicitTag || name.toLowerCase();
const templateFn = getTemplateByTag(tag);
const componentCode = templateFn(name);

const extension = lang === 'js' ? 'js' : 'tsx';
const componentDir = path.join('src', name);
fs.mkdirSync(componentDir, { recursive: true });

// Write component file
fs.writeFileSync(
  path.join(componentDir, `${name}.${extension}`),
  componentCode
);

// Optional: Jest test
if (withTests) {
  fs.writeFileSync(
    path.join(componentDir, `${name}.test.${lang}`),
    `describe('${name}', () => {
  it('renders correctly', () => {
    // TODO: Add test
  });
});`
  );
}

// Optional: Storybook story
if (withStory) {
  fs.writeFileSync(
    path.join(componentDir, `${name}.stories.${lang}`),
    `import React from 'react';
import { ${name} } from './${name}';

export default {
  title: '${name}',
  component: ${name},
};

export const Default = () => <${name} />;
`
  );
}

// Optional: Markdown docs
if (withDocs) {
  fs.writeFileSync(
    path.join(componentDir, `${name}.md`),
    `# ${name}

Component props and usage.

\`\`\`tsx
<${name} />
\`\`\`
`
  );
}

console.log(`✅ Component "${name}" scaffolded in ${componentDir}`);
