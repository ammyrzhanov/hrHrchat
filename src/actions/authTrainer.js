import Axios from 'axios'

import { TRAINER_ERROR, TRAINER_SUCCESS, server } from './consts'

const authTrainerSuccess = (payload) => {
  return {
    type: TRAINER_SUCCESS,
    payload
  }
}

const authTrainerError = (payload) => {
  return {
    type: TRAINER_ERROR,
    payload
  }
}

const authTrainer = (login, password) => {
  return (dispatch) => {
    return Axios.get(`${server}/api/planets/1231231/`, {
      login,
      password
    }).then(res => {
      dispatch(authTrainerSuccess(res))
      localStorage.setItem('token', res.data.token)
    }).catch(err => dispatch(authTrainerError(err)))
  }
}

export default authTrainer
