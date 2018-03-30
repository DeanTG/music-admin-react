import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  message
} from 'antd';
import '../styles/login.scss'

const FormItem = Form.Item;

class Login extends Component {
  state = {
    account: '',
    pwd: '',
    rememberState: true
  }
  handleAccount = (e) => {
    this.setState({account: e.target.value})
  }
  handlePwd = (e) => {
    this.setState({pwd: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this
      .props
      .history
      .push('/home')
  }
  rememberMe = (e) => {
    this.setState({rememberState: e.target.checked})
  }
  render() {
    return (
      <div id="login-container">
        <h1 className="title">管理平台</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            <Input
              onChange={this.handleAccount}
              onPressEnter={this.handleSubmit}
              prefix={< Icon type = "user" />}
              placeholder="请输入账号root"/>
          </FormItem>
          <FormItem>
            <Input
              onChange={this.handlePwd}
              onPressEnter={this.handleSubmit}
              prefix={< Icon type = "lock" />}
              type="password"
              placeholder="请输入密码123456"/>
          </FormItem>
          <FormItem>
            <Checkbox checked={this.state.rememberState} onChange={this.rememberMe}>记住我</Checkbox>
            <Button
              type="primary"
              htmlType="submit"
              style={{
              display: 'block',
              width: '100%'
            }}
              className="login-button">登录</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Login