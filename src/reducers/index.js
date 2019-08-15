import { combineReducers } from 'redux'

import { authStudentError, authStudentSuccess } from './authStudent'
import { authTrainerError, authTrainerSuccess } from './authTrainer'

const reducers = combineReducers({
  authTrainerError,
  authTrainerSuccess,
  authStudentError,
  authStudentSuccess
})

export default reducers
