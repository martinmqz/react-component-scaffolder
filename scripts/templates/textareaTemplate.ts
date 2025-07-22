export const textareaTemplate = (name: string) => `
import React from 'react'

export const ${name} = ({ id = '${name}Area', ...props }) => {
  return (
    <textarea
      id={id}
      name={id}
      aria-label="${name}"
      required
      {...props}
    />
  )
}
`
