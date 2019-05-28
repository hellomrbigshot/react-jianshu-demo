import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { initWriterList } from './actionCreators';
import { GET_WRITER_LIST } from './actionTypes'

export function* getWriterList() {
  yield takeEvery(GET_WRITER_LIST, getList)
}

export function* getList() {
  try {
    let res = yield axios.get('/api/getwriterlist')
    let list = res.data.list
    console.log(list)
    yield put(initWriterList(list))
  } catch(e) {
    console.log('网络请求错误')
  }
}