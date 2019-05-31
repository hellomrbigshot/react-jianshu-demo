import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { initWriterList, initHomeInfo, addHomeList } from './actionCreators';
import { GET_WRITER_LIST, GET_HOME_INFO, GET_MORE_LIST } from './actionTypes'

export function* getWriterList() {
  yield takeEvery(GET_WRITER_LIST, axiosWriterList)
}

export function* axiosWriterList() {
  try {
    let res = yield axios.get('/api/getwriterlist')
    let list = res.data.data.list
    yield put(initWriterList(list))
  } catch(e) {
    console.log('网络请求错误')
  }
}

export function* getHomeInfo() {
  yield takeEvery(GET_HOME_INFO, getInfo)
}

export function* getInfo() {
  try {
    let res = yield axios.get('/api/gethomeinfo')
    let info = res.data.data
    yield put(initHomeInfo(info))
  } catch(e) {
    console.log('网络请求错误')
  }
}

export function* getMoreList() {
  yield takeEvery(GET_MORE_LIST, axiosHomeList)
}

export function* axiosHomeList(action) {
  const { page } = action
  try {
    let res = yield axios.get('/api/gethomelist')
    let list = res.data.data 
    yield put(addHomeList(list, page))
  } catch(e) {
    console.log('网络请求错误')
  }
}