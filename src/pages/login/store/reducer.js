import { fromJS } from 'immutable'
import { LOGIN_SUCCESS, LOGOUT } from './actionTypes'
const defaultState = fromJS({
  login: false
})
export default (state = defaultState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return state.set('login', true)
    case LOGOUT:
      return state.set('login', false)
    default:
      return state
  }
}