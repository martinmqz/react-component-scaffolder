import { buttonTemplate } from './templates/buttonTemplate'
import { inputTemplate } from './templates/inputTemplate'
import { formTemplate } from './templates/formTemplate'
import { textareaTemplate } from './templates/textareaTemplate'
import { labelTemplate } from './templates/labelTemplate'
import { defaultTemplate } from './templates/componentTemplate'
import { anchorTemplate } from './templates/anchorTemplate'

type TemplateMap = {
  button: (name: string) => string;
  input: (name: string) => string;
  form: (name: string) => string;
  textarea: (name: string) => string;
  label: (name: string) => string;
  link: (name: string) => string;
};

const map: TemplateMap = {
  button: buttonTemplate,
  input: inputTemplate,
  form: formTemplate,
  textarea: textareaTemplate,
  label: labelTemplate,
  link: anchorTemplate
};

export const getTemplateByTag = (tag: string) => {
  if (tag in map) {
    return map[tag as keyof TemplateMap];
  }
  return defaultTemplate;
}
