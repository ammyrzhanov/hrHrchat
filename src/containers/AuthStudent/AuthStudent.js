import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import authStudent from '../../actions/authStudent'
import './authStudent.scss'
import { Button, AuthInput } from '../../components'
import emblem from '../../images/emblem.svg'
import arrowleft from '../../images/arrowleft.svg'

const AuthStudent = ({ history, state, authStudent }) => {
  const [name, setName] = useState('')
  const [roomId, setRoomId] = useState('')

  const handleChangeName = (target) => {
    setName(target.value)
  }
  const handleChangeRoomId = (target) => {
    setRoomId(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    authStudent(name, roomId)
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
          <span>Войти в чат</span>
        </div>

        {state.authStudentError.response &&
          <div className='error-output'>
            <span>{state.authStudentError.response.data.detail}</span>
          </div>}

        <form
          className='auth__student'
          onSubmit={handleSubmit}
        >
          <div className='pasword-title'>
            Имя Фамилия*
          </div>

          <AuthInput
            type='text'
            placeholder='Билинчик Билинчиков'
            onChange={handleChangeName}
            isError={!!state.authStudentError.response}
          />

          <div className='pasword-title'>
            ID*
          </div>

          <AuthInput
            type='text'
            placeholder='123456'
            onChange={handleChangeRoomId}
            isError={!!state.authStudentError.response}
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

const mapDispatchToProps = { authStudent }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthStudent))
