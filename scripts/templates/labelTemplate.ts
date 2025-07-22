export const labelTemplate = (name: string) => `
import React from 'react';

export const ${name} = ({ htmlFor = '${name}Input', children, ...props }) => {
  return (
    <label htmlFor={htmlFor} {...props}>
      {children || '${name}'}
    </label>
  );
};
`;
