import {
  VIEW_MESSAGE,
  VIEW_LIST_MESSAGES,
  VIEW_SEND_MESSAGE
} from '../constants/action_types'

export const viewMessage = id => ({
  type: VIEW_MESSAGE,
  id
})

export const viewListMessages = () => ({
  type: VIEW_LIST_MESSAGES
})

export const viewSendMessage = () => ({
  type: VIEW_SEND_MESSAGE
})
