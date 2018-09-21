import React from 'react'
import PropTypes from 'prop-types'

const DecodeMessageForm = ({ decodeMessages }) => {
  DecodeMessageForm.displayName = 'DecodeMessageForm'
  DecodeMessageForm.propTypes = {
    decodeMessages: PropTypes.func
  }

  const refs = {
    keyRef: null
  }

  const onSubmit = e => {
    e.preventDefault()

    if (refs.keyRef.value) {
      decodeMessages(refs.keyRef.value)

      refs.keyRef.value = ''
    }
  }

  return (
    <form onSubmit={onSubmit} className="decode-messages-form">
      <textarea
        ref={n => (refs.keyRef = n)}
        placeholder="Input decryption key here"
      />
      <button type="submit">Decode Messages</button>
    </form>
  )
}

export default DecodeMessageForm
