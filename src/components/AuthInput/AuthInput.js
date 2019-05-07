import React, { useState } from 'react'
import classNames from 'classnames'

import trueeye from '../../images/trueeye.svg'
import falseeye from '../../images/falseeye.svg'

import './authInput.scss'

const AuthInput = ({ type = 'text', placeholder }) => {
  const [isEye, setIsEye] = useState(true)
  const [typeState, setTypeState] = useState(type)
  const [isEmpty, setIsEmpty] = useState('')

  const handleClick = () => {
    setIsEye(!isEye)
    setTypeState(typeState === 'text' ? 'password' : 'text')
  }

  const authInputClasses = classNames({
    'auth__input': true,
    'auth__input--filled': isEmpty
  })

  return (
    <div className={authInputClasses}>
      <input
        type={typeState}
        placeholder={placeholder}
        onChange={({target}) => setIsEmpty(target.value)}
      />
      {placeholder === 'Password' &&
        <img
          className='img-eye'
          src={isEye ? falseeye : trueeye}
          alt='eye'
          onClick={handleClick}
        />
      }
    </div>
  )
}
export default AuthInput
