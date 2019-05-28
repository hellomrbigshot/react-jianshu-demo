import { GET_WRITER_LIST, INIT_WRITER_LIST } from './actionTypes'

export const getWriterList = () => ({
  type: GET_WRITER_LIST
})

export const initWriterList = (data) => ({
  type: INIT_WRITER_LIST,
  data
})