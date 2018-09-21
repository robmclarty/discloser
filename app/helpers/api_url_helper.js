import { API_ROOT_URL } from '../constants/config'

export const apiRegisterUrl = () => `${ API_ROOT_URL }/register`

export const apiRefreshUrl = () => `${ API_ROOT_URL }/auth/refresh`

export const apiAuthUrl = () => `${ API_ROOT_URL }/auth`

export const apiMessagesUrl = userId => `${ API_ROOT_URL }/users/${ userId }/messages`

export const apiMessageUrl = (userId, id) => `${ API_ROOT_URL }/users/${ userId }/messages/${ id }`

export const apiKeysUrl = userId => `${ API_ROOT_URL }/users/${ userId }/keys`

export const apiKeyUrl = (userId, id) => `${ API_ROOT_URL }/users/${ userId }/keys/${ id }`

export const apiUsersUrl = () => `${ API_ROOT_URL }/users`

export const apiUserUrl = id => `${ API_ROOT_URL }/users/${ id }`
