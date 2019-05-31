import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class List extends PureComponent {
  render() {
    const { articleList, articlePage, getMoreList } = this.props
    return (
      <div>
        {
          articleList.map((item, i) => (
            <ListItem key={i}>
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
        }
        <LoadMore onClick={ () => getMoreList(articlePage)}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) { 
      dispatch(actionCreators.getMoreList(page))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)