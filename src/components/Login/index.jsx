import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from 'antd';
import ModalForm from '../Modal';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  labelCol: {
    span: 16,
  },
};

const LoginForm = () => {

  const history = useHistory();
  const [showModal, setModal] = useState(false);

  const onFinish = values => {
    console.log('Success:', values);
    history.push('/login');

  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const showModelHandler = bol => {
    setModal(bol);
  };

  return (
    <>
      <Form
        {...layout}
        name='basic'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          className='ortex-form-fields'
          label='Username'
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className='ortex-form-fields'
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} className='ortex-login_buttons'>
          <Button type='primary' htmlType='submit' className='ortex-button'>
            Submit
          </Button>
          <Button type='secondary' htmlType='button' onClick={() => showModelHandler(true)} className='ortex-button'>
            Reset password
          </Button>
        </Form.Item>
      </Form>
      <ModalForm isShowModal={showModal} fnCallBack={showModelHandler} />
    </>
  );
};

export default LoginForm;
