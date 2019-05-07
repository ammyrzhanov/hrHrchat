import React from 'react'
import { withRouter } from 'react-router-dom'

import { Button, AuthInput } from '../../components'
import emblem from '../../images/emblem.svg'
import arrowleft from '../../images/arrowleft.svg'

const AuthTrainer = ({history}) => {
  return (
    <div className='auth__blok'>
      <div className='auth'>
        <div className='auth__goback' >
          <img
            src={arrowleft}
            alt='arrowleft'
            onClick={() => history.push('auth')}
          />
        </div>

        <div className='auth__image'>
          <img src={emblem} alt='emblem'/>
        </div>

        <div className='auth__title'>
          <span>Войти в личный кабинет</span>
        </div>

        <form className='auth__student'>
          <div className='pasword-title'>
            Логин*
          </div>

          <AuthInput
            type='text'
            placeholder='Login'
          />

          <div className='pasword-title'>
            Пароль*
          </div>

          <AuthInput
            type='password'
            placeholder='Password'
          />

          <Button
            title='Войти'
            className='btn-primary'
          />
        </form>
      </div>
    </div>

  )
}
export default withRouter(AuthTrainer)
