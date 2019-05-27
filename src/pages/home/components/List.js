import React, { Component } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    const { articleList } = this.props
    return (
      articleList.map((item, i) => (
        <ListItem key={item.get('id')}>
          <img 
            className="list-pic" 
            src={item.get('imgUrl')}
            alt="列表图片"
          />
          <ListInfo>
            <h3 className="title">{item.get('title')}</h3>
            <p className="desc">{item.get('desc')}</p>
          </ListInfo>
        </ListItem>
      ))
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}
export default connect(mapStateToProps)(List)