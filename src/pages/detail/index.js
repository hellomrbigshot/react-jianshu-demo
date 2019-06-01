import React, { PureComponent } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { getDetailInfo } from './store/actionCreators'
import marked from 'marked'
import { withRouter } from 'react-router-dom'

class Detail extends PureComponent {
  render() {
    const { detailInfo } = this.props
    return (
      <DetailWrapper>
        <Header>{detailInfo.get('title')}</Header>
        <Content>
          <img src="http://upload-images.jianshu.io/upload_images/654237-38c0eda0d2e3c348.png" alt=""/>
          <div 
            className="detail-content"
            dangerouslySetInnerHTML={{ __html: marked(detailInfo.get('content'))}}
          />
        </Content>
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetailInfo()
  }
}
const mapStateToProps = (state) => {
  return {
    detailInfo: state.getIn(['detail', 'detailInfo'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDetailInfo() {
      dispatch(getDetailInfo())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))