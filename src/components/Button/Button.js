import React from 'react'

import './button.scss'

const Button = ({title, className, onClick}) => {
  return (
    <button
      type='submit'
      className={className}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
