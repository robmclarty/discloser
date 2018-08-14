import React from 'react'
import PropTypes from 'prop-types'

const MessageView = ({
  subject,
  body,
  timestamp
}) => (
  <div className="message-view">
    <h3>{subject}</h3>
    <div className="message-body">{body}</div>
    <br />
    <footer>{timestamp}</footer>
  </div>
)

MessageView.propTypes = {
  subject: PropTypes.string,
  body: PropTypes.string,
  timestamp: PropTypes.string
}

export default MessageView
