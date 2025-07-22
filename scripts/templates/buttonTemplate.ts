export const buttonTemplate = (name: string) => `
import React from 'react'

export const ${name} = ({ type = 'button', children, ...props }) => {
  return (
    <button type={type} {...props}>
      {children || '${name}'}
    </button>
  )
}
`
