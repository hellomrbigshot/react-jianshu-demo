import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { initHeaderList } from '../common/header/store/actionCreators'
import { GET_HEADER_LIST } from '../common/header/store/actionTypes';

function* mySaga() {
  yield takeEvery(GET_HEADER_LIST, getList)
}
function* getList() {
  try {
    const res = yield axios.get('/api/getheaderlist')
    const list = res.data.list
    yield put(initHeaderList(list))
  } catch(e) {
    console.log('网络请求失败')
  }
}
export default mySaga