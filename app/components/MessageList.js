import React from 'react'
import PropTypes from 'prop-types'
import { cipherTitle } from '../helpers/string_helper'

const MessageList = ({
  messages,
  viewMessage
}) => (
  <ul className="message-list">
    {messages.map(msg => {
      let title = msg.subject

      if (!msg.subject || !msg.body) title = cipherTitle(msg.data)

      return (
        <li key={msg.id} onClick={() => viewMessage(msg.id)}>
          {title}
        </li>
      )
    })}
  </ul>
)

MessageList.propTypes = {
  messages: PropTypes.array,
  viewMessage: PropTypes.func
}

export default MessageList
