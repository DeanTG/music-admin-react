import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import {
  Layout,
  Icon,
  Breadcrumb,
  Menu,
  Modal,
} from 'antd';
import '../styles/main.scss';

import ManagerList from './manager/ManagerList';
import MusicList from './music/MusicList';

const { Header, Footer, Sider, Content } = Layout;
const confirm = Modal.confirm;

class Home extends Component {
  state = {
    collapsed: false,
    title: '平台',
    siderDate: [
      {
        text: '管理员',
        icon: 'user',
        url: 'manager'
      },
      {
        text: '列表',
        icon: 'bars',
        url: 'music'
      },
    ]
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  handleMenuClick = () => {
    confirm({
      title: '确认退出登录吗?',
      content: '',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        this
          .props
          .history
          .push('/login')
      },
      onCancel: () => {}
    });
  }
  render() {
    const match = this.props.match;
    const location = this.props.location;
    let openKey = 0;
    this.state.siderDate.forEach((item, index) => {
      if(location.pathname.indexOf(item.url) != -1){
        openKey = index + '';
      }
    });
    return (
      <Layout className="all-height">
        {/* 侧边栏 */}
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div id="nav">
            <h1 className="title">
              {this.state.collapsed ? <Icon type="ant-design"/> : this.state.title}
            </h1>
            <Menu
              defaultSelectedKeys={[openKey]}
              defaultOpenKeys={['0']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              {
                this.state.siderDate.map((item,index) =>{
                  return (
                    <Menu.Item key={index}>
                      <Link to={`${match.url}/${item.url}`}>
                        <Icon type={item.icon}/>
                        <span>{item.text}</span>
                      </Link>
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </div>
        </Sider>
        {/* 主体 */}
        <Layout>
          <Header>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{cursor: 'pointer'}}/>
            <span 
              onClick={this.handleMenuClick} 
              style={{ cursor: 'pointer'}}>
              <Icon type="logout"/>&nbsp;退出系统</span>
          </Header>
          <Content>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Icon type="home"/>
                <span>主页</span>
              </Breadcrumb.Item>
              {
                this.state.siderDate.map((item, index) =>{
                  if(location.pathname.indexOf(item.url) != -1){
                    return (
                      <Breadcrumb.Item key={index}>
                        <Icon type={item.icon}/>
                        <span>{item.text}</span>
                      </Breadcrumb.Item>
                    )
                  }
                })
              }
            </Breadcrumb>
            <div id="mainContent">
              <Switch>
                <Route path={`${match.url}/manager`} component={ManagerList}></Route>
                <Route path={`${match.url}/music`} component={MusicList}></Route>
                <Redirect from={`${match.url}`} to={`${match.url}/manager`}></Redirect>
              </Switch>
            </div>
          </Content>
          <Footer>
            底部版权信息
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Home