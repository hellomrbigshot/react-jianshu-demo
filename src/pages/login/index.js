import React, { PureComponent } from 'react'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { actionCreators } from './store'


class Login extends PureComponent {
  render() {
    const { login } = this.props
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" type="text" ref={(input) => {this.account = input}} />
            <Input placeholder="密码" type="password" ref={(input) => {this.password = input}} />
            <Button onClick={() => this.props.loginSubmit(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.getIn(['login', 'login'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginSubmit(accountEle, passwordEle) {
      const account = accountEle.value 
      const password = passwordEle.value
      dispatch(actionCreators.login(account, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))