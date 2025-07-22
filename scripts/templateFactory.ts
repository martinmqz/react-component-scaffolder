import { buttonTemplate } from './templates/buttonTemplate';
import { inputTemplate } from './templates/inputTemplate';
import { formTemplate } from './templates/formTemplate';
import { textareaTemplate } from './templates/textareaTemplate';
import { labelTemplate } from './templates/labelTemplate';
import { defaultTemplate } from './templates/componentTemplate';

export const getTemplateByTag = (tag: string) => {
  const map = {
    button: buttonTemplate,
    input: inputTemplate,
    form: formTemplate,
    textarea: textareaTemplate,
    label: labelTemplate,
  };
  return map[tag] || defaultTemplate;
};
