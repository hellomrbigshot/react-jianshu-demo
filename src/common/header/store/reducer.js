import { SEARCH_BLUR, SEARCH_FOCUS, INIT_HEADER_LIST, MOUSE_ENTER, MOUSE_LEAVE } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  headerList: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case SEARCH_FOCUS: 
      return state.set('focused', true)
    case SEARCH_BLUR:
      return state.set('focused', false)
    case MOUSE_ENTER:
      return state.set('mouseIn', true)
    case MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case INIT_HEADER_LIST:
      return state.set('headerList', JSON.parse(JSON.stringify(action.data)))
    default:
      return state
  }
}