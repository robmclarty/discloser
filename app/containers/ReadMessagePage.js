import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MessageView from '../components/MessageView'
import Page from '../components/Page'
import { cipherTitle, base64ToAscii } from '../helpers/string_helper'

const ReadMessagePage = ({ msg }) => {
  let { subject, body, created_at } = msg

  // If there is no subject, assume message has not yet been decrypted, and
  // use truncated versions of the cipher text instead.
  if (!subject) {
    subject = cipherTitle(msg.data)
    body = base64ToAscii(msg.data)
  }

  return (
    <Page name="Viewing Message">
      <MessageView subject={subject} body={body} timestamp={msg.created_at} />
    </Page>
  )
}

const mapStateToProps = state => ({
  msg: state.messages.find(msg => msg.id === state.pages.msgId)
})

export default connect(mapStateToProps)(ReadMessagePage)
