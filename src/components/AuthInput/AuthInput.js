import React, { useState } from 'react'
import classNames from 'classnames'

import trueeye from '../../images/trueeye.svg'
import falseeye from '../../images/falseeye.svg'

import './authInput.scss'

const AuthInput = ({ type = 'text', placeholder, onChange, isError = false }) => {
  const [isEye, setIsEye] = useState(true)
  const [typeState, setTypeState] = useState(type)
  const [isFilled, setIsFilled] = useState(false)
  const [inputIsError, setInputIsError] = useState(isError)

  const handleClick = () => {
    setIsEye(!isEye)
    setTypeState(typeState === 'text' ? 'password' : 'text')
  }

  const handleChange = ({target}) => {
    setIsFilled(!!target.value)
    if (!isFilled) {
      setInputIsError(false)
    }
    onChange(target)
  }

  const authInputClasses = classNames({
    'auth__input': true,
    'auth__input--error': inputIsError,
    'auth__input--filled': isFilled && !inputIsError
  })

  return (
    <div className={authInputClasses}>
      <input
        type={typeState}
        placeholder={placeholder}
        onChange={handleChange}
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
