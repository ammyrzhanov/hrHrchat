import React from 'react'

import './button.scss'

const Button = ({title, className}) => {
  return (
    <button
      type='submit'
      className={className}>
      {title}
    </button>
  )
}

export default Button
