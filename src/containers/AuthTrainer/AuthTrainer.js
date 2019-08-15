import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import authTrainer from '../../actions/authTrainer'
import { Button, AuthInput } from '../../components'
import emblem from '../../images/emblem.svg'
import arrowleft from '../../images/arrowleft.svg'

const AuthTrainer = ({history, authTrainer, state}) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeLogin = (target) => {
    setLogin(target.value)
  }
  const handleChangePassword = (target) => {
    setPassword(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    authTrainer(login, password)
  }
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

        {state.authTrainerError.response &&
          <div className='error-output'>
            <span>{state.authTrainerError.response.data.detail}</span>
          </div>}

        <form
          className='auth__student'
          onSubmit={handleSubmit}
        >
          <div className='pasword-title'>
            Логин*
          </div>

          <AuthInput
            type='text'
            placeholder='Login'
            onChange={handleChangeLogin}
            isError={!!state.authTrainerError.response}
          />

          <div className='pasword-title'>
            Пароль*
          </div>

          <AuthInput
            type='password'
            placeholder='Password'
            onChange={handleChangePassword}
            isError={!!state.authTrainerError.response}
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

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = { authTrainer }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthTrainer))
