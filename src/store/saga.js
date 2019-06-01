import { fork } from 'redux-saga/effects'
import { saga as headerSaga } from '../common/header/store'
import { saga as homeSaga } from '../pages/home/store'
import { saga as detailSaga } from '../pages/detail/store'
import { saga as loginSaga } from '../pages/login/store'

export default function* rootSaga() {
  yield fork(headerSaga.getHeaderLit)
  yield fork(homeSaga.getWriterList)
  yield fork(homeSaga.getHomeInfo)
  yield fork(homeSaga.getMoreList)
  yield fork(detailSaga.getDetailInfo)
  yield fork(loginSaga.login)
}