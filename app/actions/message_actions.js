const API_ROOT_URL = 'http://localhost:3000' // TODO: move this to env-controlled config variable

import fetch from 'node-fetch'
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

  // try {
  //   const res = await callApi(`${ API_ROOT_URL }/messages`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(msg)
  //   })
  //
  //   const json = await res.json()
  //
  //   console.log('json: ', json)
  //
  //   return {
  //     type: SEND_MESSAGE,
  //     message: {
  //       userId,
  //       createdAt: json.createdAt
  //     }
  //   }
  // } catch (err) {
  //   console.log('Ajax error: ', err)
  // }
}
