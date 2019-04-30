import React from 'react'

import './button.scss'

const Button = ({title}) => {
  return (
    <div>
      <input type='submit' value={title} className= {title === 'Тренер' ? 'btn-primary' : 'btn-secondary'}/>
    </div>
  )
}

export default Button
