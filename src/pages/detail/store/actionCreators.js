import { GET_DETAIL_INFO, INIT_DETAIL_INFO } from "./actionTypes"

export const getDetailInfo = () => {
  return {
    type: GET_DETAIL_INFO
  }
}
export const initDetailInfo = (data) => {
  return {
    type: INIT_DETAIL_INFO,
    data
  }
}