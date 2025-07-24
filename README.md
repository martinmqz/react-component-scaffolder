# react-component-scaffolder
Welcome to the react-component-scaffolder CLI tool! This utility streamlines the creation of accessible React components with TypeScript or JavaScript, offering options for tests, Storybook stories, and Markdown documentation.

[![npm version](https://img.shields.io/npm/v/react-component-scaffolder.svg)](https://www.npmjs.com/package/react-component-scaffolder)
[![npm downloads](https://img.shields.io/npm/dm/react-component-scaffolder.svg)](https://www.npmjs.com/package/react-component-scaffolder)

## ✨ Features
- **Language Flexibility** — Choose between TypeScript (`ts`) or JavaScript (`js`) by using the `--lang` flag
- **Optional File Generation** — Add:
  - `--with-tests`: 🧪 Jest test file
  - `--with-story`: 📘 Storybook story file
  - `--with-docs`: 📄 Markdown documentation
- **WCAG-Compliant Components** — Built with accessibility in mind
- **Fast, Frictionless CLI** — Generate and organize files with a single command
- **Contributor Friendly** — Designed for open source extension, team templates, and automation
- ⚙️ VS Code task integration and CLI flags

## 🚀 Installation
```bash
npm install -g react-component-scaffolder
```
Or use it instantly:
```bash
npx react-component-scaffolder AccessibleButton --with-tests --with-story --with-docs
```

## 🛠️ Usage
### Examples
```
react-component-scaffolder MyComponent --with-tests --with-story --with-docs --element=button
```

#### AccessibleButton
```
npx react-component-scaffolder AccessibleButton --with-tests --with-story --with-docs
```

#### AccessibleInput
```
npx react-component-scaffolder AccessibleInput --with-tests --with-story --with-docs
```
#### AccessibleForm
```
npx react-component-scaffolder AccessibleForm --with-tests --with-story --with-docs
```

#### AccessibleTextarea
```
npx react-component-scaffolder AccessibleTextarea --with-tests --with-story --with-docs
```

#### AccessibleLabel
```
npx react-component-scaffolder AccessibleLabel --with-tests --with-story --with-docs
```

## 🧰 Flags
| Flag | Description |
|------|-------------|
| --lang=js \| ts | Creates .js/.jsx files. Defaults to ts/tsx when flag ommitted
| --with-tests | Adds Jest test file | 
| --with-story | Adds Storybook story | 
| --with-docs | Adds Markdown file with prop documentation |
| --element | Override tag detection (e.g., input, form) |
| --help | Shows help info |

## 📦 VS Code Integration
Add this to .vscode/tasks.json to run from Command Palette:
```
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "React Dev Scaffolder",
      "type": "shell",
      "command": "npx",
      "args": [
        "ts-node",
        "scripts/generateComponent.ts",
        "${input:componentName}",
        "--with-tests",
        "--with-story",
        "--with-docs",
        "--lang=${input:language}"
      ],
      "group": "build",
      "problemMatcher": [],
      "detail": "Scaffold React component with tests, Storybook, and optional JS/TS output"
    }
  ],
  "inputs": [
    {
      "id": "componentName",
      "type": "promptString",
      "description": "Component name (e.g., Modal, FormFieldGroup)"
    },
    {
      "id": "language",
      "type": "pickString",
      "description": "Choose language output",
      "options": ["ts", "js"],
      "default": "ts"
    },
    {
      "id": "addDocs",
      "type": "pickString",
      "description": "Generate markdown docs?",
      "options": ["yes", "no"],
      "default": "yes"
    }
  ]
}
```

## 🧠 Author
Built by martinmqz — scalable UI, accessibility, and automation enthusiast.

## 📄 License
### MIT

## 📦 Changelog
### v1.0.0
Initial release

### v1.0.1
Added support for TypeScript and JavaScript

Optional file generation for tests, Storybook, and Markdown documentation

### v1.0.2
Update

Changed output path to ./src/components folder