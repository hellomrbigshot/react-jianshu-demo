import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'

class Header extends Component {
  getListArea() {
    const { focused, headerList, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(this.spin)}>
              <i ref={(icon) => this.spin = icon} className="iconfont icon-spinner spin"></i>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              headerList.map((item, i) => (
                <SearchInfoItem key={i}>{item}</SearchInfoItem>
              ))
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props
    return (
      <HeaderWrapper>
        <Logo href="./" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">
            <i className="iconfont icon-Aa" />
          </NavItem>
          <NavItem className="right">登录</NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={400} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="搜索"
              />
            </CSSTransition>
            <i
              className={classnames('iconfont', 'icon-fangdajing', 'zoom', {
                focused: focused
              })}
            />
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className={classnames('iconfont', 'icon-yumaobi')} />
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused']),
    headerList: state.getIn(['header', 'headerList']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}
const mapDispathToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getHeaderList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${ originAngle + 360 }deg)`
      dispatch(actionCreators.getHeaderList())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header)
