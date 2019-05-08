import { STUDENT_ERROR, STUDENT_SUCCESS } from '../actions/consts'

export const authStudentError = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_ERROR:
      return action.payload

    default:
      return state
  }
}

export const authStudentSuccess = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_SUCCESS:
      return action.payload

    default:
      return state
  }
}
