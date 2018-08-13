import React from 'react'
import PropTypes from 'prop-types'

const Screen = ({ name, children }) => (
  <section className="screen">
    {name &&
      <h1>{name}</h1>
    }

    <div>{children}</div>
  </section>
)

Screen.propTypes = {
  name: PropTypes.string
}

export default Screen
