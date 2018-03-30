import React, {Component} from 'react';
import {Input, Button, Table, Pagination} from 'antd';

import MusicModal from './MusicModal';

const Search = Input.Search;

class MusicList extends Component {
  state = {
    columns: [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        render: (text, record) => <span>{record.key}</span>
      }, {
        title: '标题',
        dataIndex: 'title',
        key: 'title'
      }, {
        title: '时间',
        dataIndex: 'time',
        key: 'time'
      }, {
        title: '用户',
        dataIndex: 'user',
        key: 'user'
      }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <a href="javascript:;">查看详情</a>
        )
      }
    ],
    data: [
      {
        key: '1',
        user: 'John Brown',
        time: '2018-1-1',
        title: 'New York No. 1 Lake Park'
      }, {
        key: '2',
        user: 'Jim Green',
        time: '2018-1-1',
        title: 'London No. 1 Lake Park'
      }, {
        key: '3',
        user: 'Joe Black',
        time: '2018-1-1',
        title: 'Sidney No. 1 Lake Park'
      }
    ],
    rowSelection: {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name
      })
    },
    showModal: false,
  }
  pageChange = () => {}
  add = () => {
    this.setState({
      showModal: true
    })
  }
  closeModal = () => {
    this.setState({
      showModal: false
    })
  }
  render() {
    return (
      <div>
        <div style={{
          margin: '15px 0'
        }}>
          <Search placeholder="输入关键词查询" style={{
            width: 150
          }}/>
          <Button style={{
            marginLeft: '15px'
          }}>查询</Button>
          <Button type="primary" style={{
            marginLeft: '15px'
          }} onClick={this.add}>新增</Button>
          <Button
            style={{
            marginLeft: '15px',
            backgroundColor: '#E6A23C',
            borderColor: '#E6A23C',
            color: '#fff'
          }}>修改</Button>
          <Button
            style={{
            marginLeft: '15px',
            backgroundColor: '#F56C6C',
            borderColor: '#F56C6C',
            color: '#fff'
          }}>删除</Button>
        </div>
        <Table
          rowSelection={this.state.rowSelection}
          columns={this.state.columns}
          dataSource={this.state.data}
          pagination={false}/>
        <Pagination
          size="small"
          showQuickJumper
          defaultCurrent={2}
          total={500}
          onChange={this.pageChange}
          style={{
          margin: '20px 0'
        }}/>
        <MusicModal showModal={this.state.showModal} closeModal={this.closeModal}></MusicModal>
      </div>
    )
  }
}

export default MusicList