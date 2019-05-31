import { GET_WRITER_LIST, INIT_WRITER_LIST, GET_HOME_INFO, INIT_HOME_INFO, GET_MORE_LIST, ADD_HOME_LIST, TOGGLE_TOP_SHOW } from './actionTypes'

export const getWriterList = () => ({
  type: GET_WRITER_LIST
})

export const initWriterList = (data) => ({
  type: INIT_WRITER_LIST,
  data
})

export const getHomeInfo = () => ({
  type: GET_HOME_INFO
})

export const initHomeInfo = (data) => ({
  type: INIT_HOME_INFO,
  data
})

export const getMoreList = (page) => ({
  type: GET_MORE_LIST,
  page
})

export const addHomeList = (data, page) => ({
  type: ADD_HOME_LIST,
  data,
  page
})

export const toggleTopShow = (show) => ({
  type: TOGGLE_TOP_SHOW,
  show
})

