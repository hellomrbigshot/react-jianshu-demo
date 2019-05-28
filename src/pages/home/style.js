import styled from 'styled-components'

export const HomeWrapper =  styled.div`
  width: 960px;
  margin: 0 auto;
  .clear-all {
    overflow: hidden;
    width: 100%;
  }
` 
export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  width: 625px;
  .banner-img {
    width: 625px;
    heght: 270px;
  }
`

export const HomeRight = styled.div`
  float: left;
  width: 280px;
  margin-left: 40px;
  margin-top: -5px;
`

export const TopicWrapper = styled.div`
  padding: 20px 0 10px;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .list-pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`
export const WriterWrapper = styled.div`
  width: 278px;
  height: 300px;
`
export const WriterSearchTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  color: #969696;
  margin-top: 10px;
`
export const WriterSearchSwitch = styled.div`
  color: #969696;
  font-size: 14px;
  float: right;
  &:hover {
    cursor: pointer;
  }
  .spin {
    font-size: 13px;
    margin-right: 5px;
    transition: all .4s ease-in;
    transition-origin: center center;
    display: block;
    float: left;
  }
`
export const WriterItem = styled.div`
  margin-top: 15px;
  overflow: hidden;
  height: 48px;
  .avatar {
    float: left;
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    overflow: hidden;
  }
`
export const WriterInfo = styled.div`
  float: left;
  margin-left: 5px;
  height: 48px;
  margin-bottom: 10px;
  .name {
    font-size: 14px;
    color: #333;
    padding-top: 5px;
    line-height: 20px;
  }
  .info {
    font-size: 12px;
    color: #969696;
    margin-top: 3px;
    line-height: 20px;
  }
`