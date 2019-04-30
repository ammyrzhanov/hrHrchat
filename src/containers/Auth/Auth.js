import React from 'react'

import './auth.scss'
import { emblem } from '../../images'
import { Button } from '../../components'
const Auth = () => {
  return (
    <div className = "auth__blok">
      <div className = "auth">
        <div className = "auth__image">
          <img src = {emblem} alt = ''/>
        </div>
        <div className="auth__title">
          <span>Выберите тип пользователя</span>
        </div>
        <Button title = 'Тренер'/>
        <Button title = 'Ученик'/>
      </div>
    </div>

  )
}
export default Auth
