import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import authStudent from '../../actions/authStudent'
import './authStudent.scss'
import { Button, AuthInput } from '../../components'
import emblem from '../../images/emblem.svg'
import arrowleft from '../../images/arrowleft.svg'

const AuthStudent = (props) => {
  console.log(props)
  return (
    <div className='auth__blok'>
      <div className='auth'>
        <div className='auth__goback' >
          <img
            src={arrowleft}
            alt='arrowleft'
            onClick={() => props.history.push('auth')}
          />
        </div>

        <div className='auth__image'>
          <img src={emblem} alt='emblem'/>
        </div>

        <div className='auth__title'>
          <span>Войти в чат</span>
        </div>

        <form className='auth__student' onSubmit={(e) => e.preventDefault()}>
          <div className='pasword-title'>
            Имя Фамилия*
          </div>

          <AuthInput
            type='text'
            placeholder='Билинчик Билинчиков'
          />

          <div className='pasword-title'>
            ID*
          </div>

          <AuthInput
            type='text'
            placeholder='123456'
          />

          <Button
            title='Войти'
            className='btn-primary'
            onClick = {() => props.authStudent('lol', '231456')}
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

const mapDispatchToProps = { authStudent }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthStudent))
