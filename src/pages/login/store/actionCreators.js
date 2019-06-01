import { LOGIN, LOGIN_SUCCESS, LOGOUT } from "./actionTypes"

export const login = (account, password) => {
  return {
    type: LOGIN,
    account,
    password
  }
}

export const loginSuccess = (account) => {
  return {
    type: LOGIN_SUCCESS,
    account
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}