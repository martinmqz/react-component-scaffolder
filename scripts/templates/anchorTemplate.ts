export const anchorTemplate = (name: string) => `
import React from 'react'

export const ${name} = ({ children, ...props }) => {
  return (
    <a href="" {...props}>
      {children || '${name}'}
    </a>
  )
}
`
