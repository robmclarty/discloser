import { combineReducers } from 'redux'
import messages from './messages'
import pages from './pages'

const rootReducer = combineReducers({
  messages,
  pages
})

export default rootReducer
