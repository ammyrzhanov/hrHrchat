import React from 'react'

import './authStudent.scss'
import { Button, AuthInput } from '../../components'
import emblem from '../../images/emblem.svg'
import arrowleft from '../../images/arrowleft.svg'

const AuthStudent = () => {
  return (
    <div className='auth__blok'>
      <div className='auth'>
        <div className='auth__goback' >
          <img src={arrowleft} alt='arrowleft'/>
        </div>

        <div className = 'auth__image'>
          <img src={emblem} alt='emblem'/>
        </div>

        <div className='auth__title'>
          <span>Войти в чат</span>
        </div>

        <form className='auth__student'>
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
            className = 'btn-primary'
          />
        </form>
      </div>
    </div>

  )
}
export default AuthStudent
