import React, { PureComponent } from 'react'
import { WriterWrapper, WriterSearchTitle, WriterSearchSwitch, WriterItem, WriterInfo } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class Writer extends PureComponent {
  render() {
    const { handleClick, writerList } = this.props
    return (
      <WriterWrapper>
        <WriterSearchTitle>
          推荐作者
          <WriterSearchSwitch onClick={() => handleClick(this.spin)}>
            <i ref={(icon) => this.spin = icon} className="iconfont icon-spinner spin"></i>
            换一批
          </WriterSearchSwitch>
        </WriterSearchTitle>
        <div>
          {
            writerList.map((item, i) => (
                <WriterItem key={i}>
                  <div>
                    <img src={item.imgUrl} alt="avatar" className="avatar"/>
                    <WriterInfo>
                      <h3 className="name">{item.name}</h3>
                      <div className="info">写了{item.wordCount}字 {item.like}喜欢</div>
                    </WriterInfo>
                  </div>
                </WriterItem>
            ))
          }
        </div>
      </WriterWrapper>
    )
  }
  componentDidMount() {
    this.props.handleClick(this.spin)
  }
}
const mapStateToProps = (state) => {
  return {
    writerList: state.getIn(['home', 'writerList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick(spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      dispatch(actionCreators.getWriterList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer)