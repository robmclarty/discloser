import React from 'react'
import PropTypes from 'prop-types'

const Menu = ({
  viewListMessages,
  viewSendMessage
}) => (
  <nav className="main-nav">
    <ul>
      <li><button onClick={viewListMessages}>List</button></li>
      <li><button onClick={viewSendMessage}>Send</button></li>
    </ul>
  </nav>
)

Menu.propTypes = {
  viewListMessages: PropTypes.func,
  viewSendMessage: PropTypes.func
}

export default Menu
