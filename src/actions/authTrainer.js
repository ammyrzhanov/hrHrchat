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
  console.log(name, RoomId)
  return (dispatch) => {
    return Axios.get(`${server}/api/planets/1/`, {
      name,
      RoomId
    }).then(res => {
      console.log(res)
      dispatch(authStudentSuccess(res))
    }).catch(err => authStudentError(err))
  }
}

export default authStudent
