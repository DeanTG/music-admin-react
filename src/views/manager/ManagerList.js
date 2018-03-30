import React, {Component} from 'react';
import {Button, Input, Table, Pagination} from 'antd';
const Search = Input.Search;

class ManagerList extends Component {
  state = {
    columns: [
      {
        title: '账号',
        dataIndex: 'account',
        key: 'account',
      }, {
        title: '上次登录时间',
        dataIndex: 'loginTime',
        key: 'loginTime'
      }, {
        title: '状态',
        dataIndex: 'state',
        key: 'state'
      }, {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime'
      }
    ],
    data: [
      {
        key: '1',
        account: 'John Brown',
        loginTime: '2018-1-2',
        state: '正常',
        createTime: '2018-1-1'
      }, {
        key: '2',
        account: 'Jim Green',
        loginTime: '2018-1-2',
        state: '正常',
        createTime: '2018-1-1'
      }, {
        key: '3',
        account: 'Joe Black',
        loginTime: '2018-1-2',
        state: '正常',
        createTime: '2018-1-1'
      }
    ],
    rowSelection: {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        //disabled: record.key == '1', // Column configuration not to be checked
        name: record.key
      })
    }
  }
  pageChange = () => {}
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
          }}>
            新增
          </Button>
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
      </div>
    )
  }
}

export default ManagerList