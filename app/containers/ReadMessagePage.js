import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MessageView from '../components/MessageView'
import Page from '../components/Page'

const ReadMessagePage = ({ msg }) => (
  <Page name="Viewing Message">
    <MessageView
        subject={msg.subject}
        body={msg.body}
        timestamp={msg.created_at}
    />
  </Page>
)

const mapStateToProps = state => ({
  msg: state.messages.find(msg => msg.id === state.pages.msgId)
})

export default connect(mapStateToProps)(ReadMessagePage)
