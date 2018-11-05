import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import appReducer from './reducers'
import apiMiddleware from './middleware/api_middleware'
import { autoLogin, fetchMessages } from './actions'

import App from './containers/App'

const store = createStore(appReducer, applyMiddleware(apiMiddleware))

const userId = 1
store.dispatch(fetchMessages(userId))

// Try to login from tokens in localstorage.
//store.dispatch(autoLogin())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('discloser-app')
)
