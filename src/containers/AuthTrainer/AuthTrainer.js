import React from 'react'

import './authTrainer.scss'
import { Button, AuthInput } from '../../components'
import { emblem, arrowleft } from '../../images'

const AuthTrainer = () => {
  return (
    <div className = 'auth__blok'>
      <div className = 'auth'>
        <div className='auth__goback' >
          <img src={arrowleft} alt='' />
        </div>
        <div className = 'auth__image'>
          <img src = {emblem} alt = ''/>
        </div>
        <div className='auth__title'>
          <span>Войти в личный кабинет</span>
        </div>
        <form className = 'auth__student'>
          <div className = 'pasword-title'>
            Логин*
          </div>
          <AuthInput type = 'text' placeholder = 'Login'/>
          <div className = 'pasword-title'>
            Пароль*
          </div>
          <AuthInput type = 'password' placeholder = 'Password'/>
          <Button title = 'Войти'/>
        </form>
      </div>
    </div>

  )
}
export default AuthTrainer
