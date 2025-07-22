export const inputTemplate = (name: string) => `
import React from 'react'

export const ${name} = ({ id = '${name}Input', ...props }) => {
  return (
    <input
      type="text"
      id={id}
      name={id}
      aria-label="${name}"
      required
      {...props}
    />
  )
}
`
