import {
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from '../constants/action_types'
import {
  updateTokens,
  destroyTokens,
  freshTokens,
  decodePayload
} from '../middleware/api_middleware'
import {
  fetchMessages
  //fetchKeys
} from './'
import {
  apiRegisterUrl,
  apiRefreshUrl,
  apiAuthUrl
} from '../helpers/api_url_helper'

// Common actions to take to initialize the app's state.
const startup = (dispatch, state) => {
  const userId = state.auth.payload.userId

  dispatch(fetchMessages(userId))
  // dispatch(fetchKeys(userId))
  console.log('logged in with payload: ', state.auth.payload)
}

// Register
// --------
export const register = creds => async (dispatch, callApi) => {
  dispatch(registerPending())

  try {
    const json = await callApi({
      url: apiRegisterUrl(),
      method: 'POST',
      body: creds,
      requireAuth: false
    })
    const user = json.user

    dispatch(registerSuccess(user))
  } catch (err) {
    dispatch(registerFail(err))
  }
}

export const registerPending = () => ({
  type: REGISTER_PENDING
})

export const registerSuccess = user => ({
  type: registerSuccess,
  accessToken,
  refreshToken,
  tokenPayload: decodePayload(accessToken),
  receivedAt: Date.now(),
  user
})

export const registerFail = err => ({
  type: REGISTER_FAIL,
  message: err,
  receivedAt: Date.now()
})

// Login
// -----

// Post login credentials to server and receive JSON Web Tokens for
// authorization with API. Redirect to map screen after successful manual login.
//
// `creds` is an object containing a user's login credentials:
// {
//   username: 'johndoe',
//   password: 'my-s3cret_Password'
// }
export const login = creds => async (dispatch, callApi, getState) => {
  dispatch(loginPending())

  try {
    const json = await callApi({
      url: apiAuthUrl(),
      method: 'POST',
      body: creds,
      requireAuth: false
    })
    const tokens = await updateTokens(json.tokens)

    dispatch(loginSuccess(tokens))
    startup(dispatch, getState())
    // TODO: change page
  } catch (err) {
    dispatch(loginFail(err))
  }
}

// TODO: Might want to handle auto-login failure differently than regular
// failure so that there isn't an actual error message displayed necessarily.
export const autoLogin = () => async (dispatch, callApi, getState) => {
  dispatch(loginPending())

  try {
    const freshTokens = await freshTokens(getState())
    const tokens = await updateTokens(freshTokens)

    dispatch(loginSuccess(tokens))
    startup(dispatch, getState())
    // TODO: change page
  } catch (err) {
    dispatch(loginFail(err))
  }
}

const loginPending = () => ({
  type: LOGIN_PENDING
})

const loginSuccess = tokens => {
  const { accessToken, refreshToken } = tokens

  return {
    type: LOGIN_SUCCESS,
    accessToken,
    refreshToken,
    tokenPayload: decodePayload(accessToken),
    receivedAt: Date.now()
  }
}

const loginFail = err => ({
  type: LOGIN_FAIL,
  message: err,
  receivedAt: Date.now()
})

// Logout
// ------
export const logout = () => async (dispatch, callApi) => {
  dispatch(logoutPending())

  try {
    // Immediately remove tokens from local storage and initiate logout action so
    // that the tokens are removed from local storage regardless of what happens
    // on the server (e.g., maybe the server's token cache was reset but the local
    // storage is still active).
    await destroyTokens()

    dispatch(logoutSuccess())

    // TODO: change page

    await callApi({
      url: apiAuthUrl(),
      method: 'DELETE',
      useRefreshToken: true
    })
  } catch (err) {
    dispatch(logoutFail(err))
  }
}

const logoutPending = () => ({
  type: LOGOUT_PENDING
})

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  receivedAt: Date.now()
})

const logoutFail = err => ({
  type: LOGOUT_FAIL,
  message: err,
  receivedAt: Date.now()
})
