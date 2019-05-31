import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { initHeaderList } from './actionCreators'
import { GET_HEADER_LIST } from './actionTypes';

export function* getHeaderLit() {
  yield takeEvery(GET_HEADER_LIST, getList)
}
export function* getList() {
  try {
    const res = yield axios.get('/api/getheaderlist')
    const list = res.data.data.list
    yield put(initHeaderList(list))
  } catch(e) {
    console.log('网络请求失败')
  }
}