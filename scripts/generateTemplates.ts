export function getComponentTemplate({
  name,
  lang,
  flags,
}: {
  name: string;
  lang: 'ts' | 'js';
  flags: {
    test: boolean;
    story: boolean;
    docs: boolean;
  };
}) {
  const pascal = name[0].toUpperCase() + name.slice(1);
  const ext = lang === 'js' ? 'jsx' : 'tsx';

  const files: Record<string, string> = {};

  // Component
  files[`${pascal}.${ext}`] = lang === 'js'
    ? `import React from 'react';
import PropTypes from 'prop-types';

function ${pascal}({ label, onClick, ariaLabel, disabled = false }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel || label}
      disabled={disabled}
      className="btn"
    >
      {label}
    </button>
  );
}

${pascal}.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ${pascal};`
    : 
	
	`import React from 'react';

type ${pascal}Props = {
  label: string;
  onClick: () => void;
  ariaLabel?: string;
  disabled?: boolean;
};

const ${pascal}: React.FC<${pascal}Props> = ({ label, onClick, ariaLabel, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel || label}
      disabled={disabled}
      className="btn"
    >
      {label}
    </button>
  );
};

export default ${pascal};`;

  // Test
  if (flags.test) {
    files[`${pascal}.test.${ext}`] = `import { render, screen, fireEvent } from '@testing-library/react';
import ${pascal} from './${pascal}';

describe('${pascal}', () => {
  it('renders and handles click', () => {
    const onClick = jest.fn();
    render(<${pascal} label="Click me" onClick={onClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('uses aria-label correctly', () => {
    render(<${pascal} label="Click" onClick={() => {}} ariaLabel="Accessible" />);
    expect(screen.getByLabelText('Accessible')).toBeInTheDocument();
  });
});`;
  }

  // Storybook
  if (flags.story) {
    files[`${pascal}.stories.${ext}`] = `import React from 'react';
import ${pascal} from './${pascal}';

export default {
  component: ${pascal},
  title: 'Components/${pascal}',
};

export const Default = {
  args: {
    label: 'Click me',
    onClick: () => alert('Clicked!'),
  },
};`;
  }

  // Markdown
  if (flags.docs) {
    files[`${pascal}.md`] = `# ${pascal}

Accessible button component with typed or prop-validated props.

## Props

- \`label\`: visible text
- \`onClick\`: event handler
- \`ariaLabel\`: screen reader text
- \`disabled\`: disables the button`;
  }

  return files;
}