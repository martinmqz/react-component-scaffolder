export const generateComponentTemplate = (name: string, tag: string): string => {
  const isSelfClosing = ['input'].includes(tag);
  const element = isSelfClosing ? `<${tag} {...props} />` : `<${tag} {...props}>${name}</${tag}>`;

  return `import React from 'react';

export const ${name} = (props) => {
  return (
    ${element}
  );
};`;
};
