import { combineReducers } from 'redux'
import auth from './auth'
import messages from './messages'
import pages from './pages'

const rootReducer = combineReducers({
  auth,
  messages,
  pages
})

export default rootReducer
