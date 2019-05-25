import { SEARCH_FOCUS, SEARCH_BLUR, INIT_HEADER_LIST, GET_HEADER_LIST, MOUSE_ENTER, MOUSE_LEAVE } from './actionTypes'
export const searchFocus = () => ({
  type: SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: SEARCH_BLUR
})

export const getHeaderList = () => ({
  type: GET_HEADER_LIST
})

export const initHeaderList = (data) => ({
  type: INIT_HEADER_LIST,
  data
})

export const mouseEnter = () => ({
  type: MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: MOUSE_LEAVE
})
