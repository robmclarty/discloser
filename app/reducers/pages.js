import {
  VIEW_MESSAGE,
  VIEW_LIST_MESSAGES,
  VIEW_SEND_MESSAGE
} from '../constants/action_types'

const initialState = {
  current: VIEW_LIST_MESSAGES,
  msgId: null
}

const pages = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_MESSAGE:
      return {
        ...state,
        current: VIEW_MESSAGE,
        msgId: action.id
      }
    case VIEW_LIST_MESSAGES:
      return {
        ...state,
        current: VIEW_LIST_MESSAGES
      }
    case VIEW_SEND_MESSAGE:
      return {
        ...state,
        current: VIEW_SEND_MESSAGE
      }
    default:
      return state
  }
}

export default pages
