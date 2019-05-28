import { fork } from 'redux-saga/effects'
import { saga as headerSaga } from '../common/header/store'
import { saga as writerSaga } from '../pages/home/store'

export default function* rootSaga() {
  yield fork(headerSaga.getHeaderLit)
  yield fork(writerSaga.getWriterList)
}