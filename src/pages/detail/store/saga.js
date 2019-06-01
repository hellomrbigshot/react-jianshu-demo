import { takeEvery, put } from 'redux-saga/effects'
import { GET_DETAIL_INFO } from './actionTypes'
import axios from 'axios';
import { initDetailInfo } from './actionCreators';
export function* getDetailInfo() {
  yield takeEvery(GET_DETAIL_INFO, axiosDetailInfo)
} 

export function* axiosDetailInfo() {
  let res = yield axios('/api/getdetailinfo')
  let info = res.data.data
  yield put(initDetailInfo(info))
}