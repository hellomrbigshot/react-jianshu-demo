import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import { List, Recommend, Topic, Writer } from './components'
import { actionCreators } from './store'
import { connect } from 'react-redux'

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <div className="clear-all">
          <HomeLeft>
            <img
              className="banner-img" 
              src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
              alt="home 图片"
            />
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
        </div>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null }
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.initHome()
    this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTop)
  }
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTop)
  }
}
const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    initHome() {
      dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTop(e) {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.toggleTopShow(true))
      } else {
        dispatch(actionCreators.toggleTopShow(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)