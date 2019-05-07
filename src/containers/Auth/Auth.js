import React from 'react'

import './auth.scss'
import emblem from '../../images/emblem.svg'
import { Button } from '../../components'
const Auth = () => {
  return (
    <div className='auth__blok'>
      <div className='auth user-type'>
        <div className='auth__image'>
          <img src={emblem} alt='emblem'/>
        </div>
        <div className='auth__title'>
          <span>Выберите тип пользователя</span>
        </div>
        <Button
          title='Тренер'
          className = 'btn-primary'
        />
        <Button
          title='Ученик'
          className = 'btn-secondary'
        />
      </div>
    </div>
  )
}
export default Auth
