import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
  position: relativ;
  height: 56px;
  bacground: #ddd;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`
export const NavItem = styled.div`
  line-height: 56px;
  font-size: 17px;
  padding: 0 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  height: 56px;
  margin-left: 20px;
  .zoom {
    position: absolute;
    right: 5px;
    top: 13px;
    color: #969696;
    font-size: 17px;
    width: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    &.focused {
      color: #fff;
      background: #969696;
    }
  }
`

export const NavSearch = styled.input`
  position: relative;
  top: 9px;
  width: 240px;
  box-sizing: border-box;
  height: 38px;
  border: none;
  border-radius: 19px;
  background: #eee;
  padding: 0 35px 0 20px;
  font-size: 14px;
  color: #777;
  outline: none;
  &.slide-enter {
    width: 240px;
    transition: all .4s ease-out;
  }
  &.slide-enter-active {
    width: 320px;
  }
  &.slide-exit {
    transition: all .4s ease-out;
  }
  &.slide-exit-active {
    width: 240px;
  }
  &::placeholder {
    color: #a0a0a0;
  }
  &.focused {
    width: 320px;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 250px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  padding: 20px 20px 10px;
  box-sizing: border-box;
  border-radius: 4px;
`

export const SearchInfoTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 10px;
  color: #969696;
  overflow: hidden;
`
export const SearchInfoSwitch = styled.span`
  font-size: 13px;
  float: right
  &:hover {
    cursor: pointer;
  }
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.span`
  font-size: 12px;
  display: block;
  float: left;
  line-heigth: 28px;
  padding: 2px 6px;
  color: #787878;
  margin-right: 10px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  height: 56px;
  top: 0;
`
export const Button = styled.div`
  float: right;
  line-height: 24px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6109;
  margin-right: 20px;
  padding: 6px 15px;
  font-size: 15px;
  text-align: center;
  box-sizing: border-box;
  &: hover {
    cursor: pointer;
  }
  &.reg {
    width: 80px;
    color: #ec6109;
    &: hover {
      background: #fef7f5;
    }
  }
  &.writting {
    width: 100px;
    color: #fff;
    background: #ea6f5a;
    &: hover {
      background: #ec6149;
    }
  }
`