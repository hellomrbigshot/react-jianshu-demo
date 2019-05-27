import React, { Component } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends Component {
  render() {
    const { topicList } = this.props
    return (
      <TopicWrapper>
        {
          topicList.map((item, i) => (
            <TopicItem key={item.get('id')}>
              <img 
                src={item.get('imgUrl')} 
                className="topic-pic" 
                alt="主题图片"
              />
              { item.get('title') }
            </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}

export default connect(mapStateToProps)(Topic)