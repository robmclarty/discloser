import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  VIEW_MESSAGE,
  VIEW_LIST_MESSAGES,
  VIEW_SEND_MESSAGE
} from '../constants/action_types'
import { viewListMessages, viewSendMessage } from '../actions'
import SendMessagePage from './SendMessagePage'
import ListMessagesPage from './ListMessagesPage'
import ReadMessagePage from './ReadMessagePage'
import Menu from '../components/Menu'

const renderPage = name => {
  switch (name) {
    case VIEW_MESSAGE:
      return <ReadMessagePage />
    case VIEW_LIST_MESSAGES:
      return <ListMessagesPage />
    case VIEW_SEND_MESSAGE:
      return <SendMessagePage />
    default:
      return <ListMessagesPage />
  }
}

const App = ({ pageName, viewListMessages, viewSendMessage }) => (
  <div className="app-container discloser">
    <header>
      <h1 className="app-name">Discloser</h1>
      <Menu
        viewListMessages={viewListMessages}
        viewSendMessage={viewSendMessage}
      />
    </header>

    <main>{renderPage(pageName)}</main>

    <footer>&copy; 2018 Rob McLarty</footer>
  </div>
)

const mapStateToProps = state => ({
  pageName: state.pages.current
})

const mapDispatchToProps = dispatch => ({
  viewListMessages: () => dispatch(viewListMessages()),
  viewSendMessage: () => dispatch(viewSendMessage())
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
