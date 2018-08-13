import {
  SEND_MESSAGE
} from '../constants/action_types'
import {
  encryptMessage,
  decryptMessage
} from '../helpers/crypto_helper'

export const sendMessage = ({
  userId,
  subject,
  body,
  key,
  createdAt
}) => {
  console.log('key: ', key)
  console.log('subject: ', subject)
  console.log('body: ', body)
  const encryptedSubject = encryptMessage(key, subject)
  const encryptedBody = encryptMessage(key, body)
  const data = encryptedSubject.concat('.', encryptedBody)
  const mac = '' // TODO: sign something based on the value of `data`

  const msg = {
    userId,
    data,
    mac,
    createdAt
  }

  console.log('encrypted message object: ', msg)

  return {
    type: SEND_MESSAGE,
    message: {
      userId,
      createdAt
    }
  }
}
