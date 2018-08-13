import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { sendMessage } from '../actions'
import MessageForm from '../components/MessageForm'
import Screen from '../components/Screen'

const SendMessageScreen = ({ sendMessage }) => (
  <Screen name="Send Message">
    <MessageForm sendMessage={sendMessage} />
  </Screen>
)

const mapStateToProps = state => ({
  //TODO: maybe give the component a pre-saved encryption key from the store
})

const mapDispatchToProps = dispatch => ({
  sendMessage: msg => dispatch(sendMessage(msg))
})

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageScreen)
