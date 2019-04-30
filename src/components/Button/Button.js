import React from 'react'

import './button.scss'

const Button = ({title, onClick}) => {
  return (
    <div>
      <input type='submit' value={title} className= {title === 'Тренер' ? 'btn-primary' : 'btn-secondary'}
        onClick= {onClick}/>
    </div>
  )
}

export default Button
