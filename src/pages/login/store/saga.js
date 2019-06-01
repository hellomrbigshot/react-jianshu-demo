import { takeEvery, put } from 'redux-saga/effects'
import { LOGIN } from './actionTypes'
import axios from 'axios'
import { loginSuccess } from './actionCreators'
export function* login() {
  yield takeEvery(LOGIN, axiosLogin)
}

export function* axiosLogin(action) {
  try {
    const res = yield axios.post(`/api/login?account=${ action.account }&password=${ action.password }`, { account: action.account, password: action.password })
    yield put(loginSuccess(res.data.data))
  } catch(e) {
    console.log('网络请求错误')
  }
}