import { STUDETN_ERROR, STUDETN_SUCCESS } from '../actions/consts'

export const authStudentError = (state = {}, action) => {
  switch (action.type) {
    case STUDETN_ERROR:
      return action.payload

    default:
      return state
  }
}

export const authStudentSuccess = (state = {}, action) => {
  switch (action.type) {
    case STUDETN_SUCCESS:
      return action.payload

    default:
      return state
  }
}
