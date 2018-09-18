import React from 'react'
import PropTypes from 'prop-types'

const Menu = ({
  viewListMessages,
  viewSendMessage
}) => (
  <nav className="main-nav">
    <button onClick={viewListMessages}>List</button>
    <button onClick={viewSendMessage}>Send</button>
  </nav>
)

Menu.propTypes = {
  viewListMessages: PropTypes.func,
  viewSendMessage: PropTypes.func
}

export default Menu
