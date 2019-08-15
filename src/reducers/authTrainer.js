import { TRAINER_ERROR, TRAINER_SUCCESS } from '../actions/consts'

export const authTrainerError = (state = {}, action) => {
  switch (action.type) {
    case TRAINER_ERROR:
      return action.payload

    default:
      return state
  }
}

export const authTrainerSuccess = (state = {}, action) => {
  switch (action.type) {
    case TRAINER_SUCCESS:
      return action.payload

    default:
      return state
  }
}
