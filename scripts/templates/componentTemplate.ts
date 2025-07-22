export const defaultTemplate = (name: string) => `
import React from 'react'

export const ${name} = (props) => {
  return <div {...props}>${name}</div>
}
`
