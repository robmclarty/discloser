import React from 'react'
import PropTypes from 'prop-types'

const MessageForm = ({ sendMessage }) => {
  MessageForm.displayName = 'MessageForm'
  MessageForm.propTypes = {
    sendMessage: PropTypes.func
  }
  MessageForm.defaultProps = {}

  const refs = {
    userIdRef: null,
    subjectRef: null,
    bodyRef: null,
    keyRef: null
  }

  const onSubmit = e => {
    e.preventDefault()

    if (refs.bodyRef.value && refs.keyRef.value) {
      sendMessage({
        userId: refs.userIdRef.value,
        subject: refs.subjectRef.value,
        body: refs.bodyRef.value,
        key: refs.keyRef.value
      })

      // Reset form values.
      Object.keys(refs).forEach(name => (refs[name].value = ''))
    }
  }

  return (
    <form onSubmit={onSubmit} className="message-form">
      <input type="text" ref={n => (refs.userIdRef = n)} placeholder="UserID" />
      <input
        type="text"
        ref={n => (refs.subjectRef = n)}
        placeholder="Subject"
      />
      <textarea
        ref={n => (refs.bodyRef = n)}
        placeholder="Type your message here"
      />
      <textarea
        ref={n => (refs.keyRef = n)}
        placeholder="Input encryption key here"
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default MessageForm
