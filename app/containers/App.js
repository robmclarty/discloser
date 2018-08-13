import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import SendMessageScreen from './SendMessageScreen'

const App = () => (
  <div className="app-container discloser">
    <header>Discloser</header>

    <main>
      <SendMessageScreen />
    </main>
  </div>
)

const mapStateToProps = state => ({
})

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer
