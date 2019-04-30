import React, { Component } from 'react'
import classNames from 'classnames'

import { trueeye, falseeye } from '../../images'
import './authInput.scss'

export default class AuthInput extends Component {
  state = {
    isEye: true,
    type: this.props.type,
    isEmpty: ''
  }
  handleClick = () => {
    this.setState({
      isEye: !this.state.isEye,
      type: this.state.type === 'text' ? 'password' : 'text'
    })
  }
  handleChange = ({target}) => {
    this.setState({
      isEmpty: target.value
    })
  }
  render() {
    const { placeholder } = this.props
    const { type } = this.state
    const authInputClasses = classNames({
      auth__input: true,
      auth__input__filled: this.state.isEmpty
    })
    return (
      <div className = {authInputClasses}>
        <input type = {type} placeholder = {placeholder} onChange = {this.handleChange}>
        </input>
        {
          placeholder === 'Password' && <img className = 'img-eye'
            src = {this.state.isEye ? falseeye : trueeye}
            alt = ''
            onClick = {this.handleClick}/>
        }
      </div>
    )
  }
}
