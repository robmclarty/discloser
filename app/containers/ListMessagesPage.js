import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { decodeMessages, viewMessage } from '../actions'
import MessageList from '../components/MessageList'
import DecodeMessageForm from '../components/DecodeMessageForm'
import Page from '../components/Page'

const ListMessagesPage = ({ decodeMessages, viewMessage, messages }) => (
  <Page name="List Messages">
    <MessageList messages={messages} viewMessage={viewMessage} />
    <DecodeMessageForm decodeMessages={decodeMessages} />
  </Page>
)

const mapStateToProps = state => ({
  messages: state.messages
})

const mapDispatchToProps = dispatch => ({
  viewMessage: msgId => dispatch(viewMessage(msgId)),
  decodeMessages: key => dispatch(decodeMessages(key))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMessagesPage)
