import { fromJS } from 'immutable'
import { INIT_WRITER_LIST, INIT_HOME_INFO, ADD_HOME_LIST, TOGGLE_TOP_SHOW } from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  showScroll: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case INIT_WRITER_LIST:
      return state.set('writerList', JSON.parse(JSON.stringify(action.data)))
    case INIT_HOME_INFO:
      const { topicList, articleList, recommendList } = action.data
      return state.merge({ 
        topicList: fromJS(topicList), 
        articleList: fromJS(articleList), 
        recommendList: fromJS(recommendList)
      })
    case ADD_HOME_LIST:
      const { data, page } = action
      return state.merge({
        articleList: state.get('articleList').concat(fromJS(data)),
        articlePage: page + 1
      })
    case TOGGLE_TOP_SHOW:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}