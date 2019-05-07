import Axios from 'axios'

import { STUDETN_ERROR, STUDETN_SUCCESS, server } from './consts'

const authStudentSuccess = (payload) => {
  return {
    type: STUDETN_SUCCESS,
    payload
  }
}

const authStudentError = (payload) => {
  return {
    type: STUDETN_ERROR,
    payload
  }
}

const authStudent = (name, RoomId) => {
  return (dispatch) => {
    return Axios.get(`${server}/api/planets/1531/`, {
      name,
      RoomId
    }).then(res => {
      console.log(res)
      dispatch(authStudentSuccess(res))
    }).catch(err => dispatch(authStudentError(err)))
  }
}

export default authStudent
