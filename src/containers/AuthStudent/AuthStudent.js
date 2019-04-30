import React from 'react'
import { withRouter } from 'react-router-dom'

import './authStudent.scss'
import { Button, AuthInput } from '../../components'
import { emblem, arrowleft } from '../../images'

const AuthStudent = ({history}) => {
  return (
    <div className = 'auth__blok'>
      <div className = 'auth'>
        <div className='auth__goback' >
          <img src={arrowleft} alt='' onClick = {() => history.push('/auth')}/>
        </div>
        <div className = 'auth__image'>
          <img src = {emblem} alt = ''/>
        </div>
        <div className='auth__title'>
          <span>Войти в чат</span>
        </div>
        <form className = 'auth__student'>
          <div className = 'pasword-title'>
            Имя Фамилия*
          </div>
          <AuthInput type = 'text' placeholder = 'Билинчик Билинчиков'/>
          <div className = 'pasword-title'>
            ID*
          </div>
          <AuthInput type = 'text' placeholder = '123456'/>
          <Button title = 'Войти'/>
        </form>
      </div>
    </div>

  )
}
export default withRouter(AuthStudent)
