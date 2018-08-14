const API_ROOT_URL = 'http://localhost:3000' // TODO: move this to env-controlled config variable

import fetch from 'node-fetch'
import {
  SEND_MESSAGE,
  DECODE_MESSAGES,
  RECEIVE_MESSAGES
} from '../constants/action_types'
import {
  encryptMessage,
  decryptMessage
} from '../helpers/crypto_helper'

export const sendMessage = ({
  userId,
  subject,
  body,
  key
}) => (dispatch, callApi) => {
  const encryptedMessage = encryptMessage(key, {
    subject,
    body
  })
  const mac = 'xxxxx' // TODO: sign something based on the value of `data`

  const msg = {
    userId,
    data: encryptedMessage,
    mac
  }

  console.log('encrypted message object: ', msg)

  return callApi(`${ API_ROOT_URL }/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(msg)
  })
    .then(res => res.json())
    .then(json => {
      console.log('json: ', json)

      dispatch({
        type: SEND_MESSAGE,
        message: {
          userId,
          createdAt: json.createdAt
        }
      })
    })
    .catch(err => console.log('Ajax error: ', err))
}

export const fetchMessages = userId => (dispatch, callApi) => {
  return callApi(`${ API_ROOT_URL }/messages`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => {
      console.log('messages: ', json.messages)

      dispatch({
        type: RECEIVE_MESSAGES,
        messages: json.messages
      })
    })
    .catch(err => console.log('Ajax error: ', err))
}

export const decodeMessages = key => ({
  type: DECODE_MESSAGES,
  decrypt: data => decryptMessage(key, data, '')
})
