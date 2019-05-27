import { fromJS} from 'immutable'
import recommendBg1 from '../../../statics/recommend-bg-1.png'
import recommendBg2 from '../../../statics/recommend-bg-2.png'
import recommendBg3 from '../../../statics/recommend-bg-3.png'
import recommendBg4 from '../../../statics/recommend-bg-4.png'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/5876985/4ded747d-895a-4ebc-99bd-ef89dc2d5a68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/5876985/4ded747d-895a-4ebc-99bd-ef89dc2d5a68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120'
    }
  ],
  articleList: [
    {
      id: 1,
      title: 'vue入门：对vue项目中api接口的封装管理',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/5876985/4ded747d-895a-4ebc-99bd-ef89dc2d5a68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
      desc: '在以前的文档中，我们构建了vue项目的整体架构，详见vue入门：vue项目架构设计起步，现在我们主要对其中的api接口封装进行完善，并将过程做个...'
    },
    {
      id: 2,
      title: 'vue入门：对vue项目中api接口的封装管理',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/5876985/4ded747d-895a-4ebc-99bd-ef89dc2d5a68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
      desc: '在以前的文档中，我们构建了vue项目的整体架构，详见vue入门：vue项目架构设计起步，现在我们主要对其中的api接口封装进行完善，并将过程做个...'
    },
    {
      id: 3,
      title: 'vue入门：对vue项目中api接口的封装管理',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/5876985/4ded747d-895a-4ebc-99bd-ef89dc2d5a68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
      desc: '在以前的文档中，我们构建了vue项目的整体架构，详见vue入门：vue项目架构设计起步，现在我们主要对其中的api接口封装进行完善，并将过程做个...'
    },
    {
      id: 4,
      title: 'vue入门：对vue项目中api接口的封装管理',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/5876985/4ded747d-895a-4ebc-99bd-ef89dc2d5a68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
      desc: '在以前的文档中，我们构建了vue项目的整体架构，详见vue入门：vue项目架构设计起步，现在我们主要对其中的api接口封装进行完善，并将过程做个...'
    }
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: recommendBg1
    },
    {
      id: 2,
      imgUrl: recommendBg2
    },
    {
      id: 3,
      imgUrl: recommendBg3
    },
    {
      id: 4,
      imgUrl: recommendBg4
    }
  ]
})

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}