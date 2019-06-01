import { fromJS } from 'immutable'
import { INIT_DETAIL_INFO } from './actionTypes';


const defaultState = fromJS({
  detailInfo: {
    title: '',
    content: ''
  }
})
export default (state = defaultState, action) => {
  switch(action.type) {
    case INIT_DETAIL_INFO:
      return state.set('detailInfo', fromJS(action.data))
    default:
      return state
  }
}