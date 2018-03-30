import React, {Component} from 'react';
import { Modal } from 'antd';

class MusicModal extends Component {
  state = {
    ModalText: 'Content of the modal',
    confirmLoading: false,
  }
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.props.closeModal()
      this.setState({
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.props.closeModal()
  }
  render(props) {
    const { confirmLoading, ModalText } = this.state;
    return (
      <Modal title="Title"
        visible={this.props.showModal}
        onOk={this.handleOk}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel}
      >
        <p>{ModalText}</p>
      </Modal>
    );
  }
}

export default MusicModal