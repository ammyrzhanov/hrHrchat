import React from 'react'
import { withRouter } from 'react-router-dom'

import './auth.scss'
import { emblem } from '../../images'
import { Button } from '../../components'
const Auth = ({history}) => {
  return (
    <div className = "auth__blok">
      <div className = "auth">
        <div className = "auth__image">
          <img src = {emblem} alt = ''/>
        </div>
        <div className="auth__title">
          <span>Выберите тип пользователя</span>
        </div>
        <Button title = 'Тренер' onClick = {() => history.push('/auth/trainer')}/>
        <Button title = 'Ученик' onClick = {() => history.push('/auth/student')}/>
      </div>
    </div>

  )
}
export default withRouter(Auth)
