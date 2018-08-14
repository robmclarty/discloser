import {
  SEND_MESSAGE,
  DECODE_MESSAGES,
  RECEIVE_MESSAGES
} from '../constants/action_types'

const initialState = []

const messages = (state = initialState, action) => {
  switch(action.type) {
  // case SEND_MESSAGE:
  //   return {
  //     ...state,
  //     messages: [
  //       action.message,
  //       ...messages
  //     ]
  //   }
  case RECEIVE_MESSAGES:
    return action.messages
  case DECODE_MESSAGES:
    return state.map(msg => {
      const json = action.decrypt(msg.data)

      return {
        ...msg,
        subject: json.subject,
        body: json.body
      }
    })
  default:
    return state
  }
}

export default messages
