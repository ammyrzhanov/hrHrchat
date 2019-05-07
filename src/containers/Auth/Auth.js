import React from 'react'
import { withRouter } from 'react-router-dom'

import './auth.scss'
import emblem from '../../images/emblem.svg'
import { Button } from '../../components'
const Auth = ({history}) => {
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
          className='btn-primary'
          onClick={() => history.push('auth/trainer')}
        />

        <Button
          title='Ученик'
          className='btn-secondary'
          onClick={() => history.push('auth/student')}
        />
      </div>
    </div>
  )
}
export default withRouter(Auth)
