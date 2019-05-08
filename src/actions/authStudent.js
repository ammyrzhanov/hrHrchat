import Axios from 'axios'

import { STUDENT_ERROR, STUDENT_SUCCESS, server } from './consts'

const authStudentSuccess = (payload) => {
  return {
    type: STUDENT_SUCCESS,
    payload
  }
}

const authStudentError = (payload) => {
  return {
    type: STUDENT_ERROR,
    payload
  }
}

const authStudent = (name, RoomId) => {
  return (dispatch) => {
    return Axios.get(`${server}/api/planets/1231321/`, {
      name,
      RoomId
    }).then(res => {
      dispatch(authStudentSuccess(res))
      localStorage.setItem('token', res.data.token)
    }).catch(err => dispatch(authStudentError(err)))
  }
}

export default authStudent
