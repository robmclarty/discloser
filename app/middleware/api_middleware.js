import fetch from 'node-fetch'

const callApi = state => {
  // TODO: flesh this out to include functionality for managing and refreshing auth tokens
  return fetch
}

const apiMiddleware = ({ dispatch, getState }) => next => action => {
  return typeof action === 'function' ?
    action(dispatch, callApi(getState()), getState) :
    next(action)
}

export default apiMiddleware
