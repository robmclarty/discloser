import React from 'react'
import PropTypes from 'prop-types'

const MessageList = ({
  messages,
  viewMessage
}) => (
  <ul className="message-list">
    {messages.map(msg => {
      if (!msg.subject || !msg.body) {
        return (
          <li key={msg.id}>
            <div><b>{msg.id}</b>: {msg.created_at}</div>
            <div>{msg.data}</div>
          </li>
        )
      }

      return (
        <li key={msg.id} onClick={() => viewMessage(msg.id)}>
          {msg.subject}
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
