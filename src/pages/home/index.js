import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import { List, Recommend, Topic, Writer } from './components'

class Home extends Component {
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
      </HomeWrapper>
    )
  }
}

export default Home