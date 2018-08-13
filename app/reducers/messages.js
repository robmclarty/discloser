import {
  SEND_MESSAGE
} from '../constants/action_types'

const initialState = {
  messages: []
}

const messages = (state = initialState, action) => {
  switch(action.type) {
  case SEND_MESSAGE:
    return {
      ...state,
      messages: [
        action.message,
        ...messages
      ]
    }
  default:
    return state
  }
}

export default messages
