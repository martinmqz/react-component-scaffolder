export const formTemplate = (name: string) => `
import React from 'react';

export const ${name} = ({ onSubmit, children, ...props }) => {
  return (
    <form role="form" onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
};
`;
