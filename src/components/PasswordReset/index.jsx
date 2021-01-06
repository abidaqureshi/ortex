import React from 'react';
import { Form, Input, Row, Col } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const PasswordResetForm = () => {
  return (
    <>
      <Row>
        <Col span={2}></Col>
        <Col span={15}>
          <Form
            {...layout}
            name='basic'
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              className='ortex-form-fields'
              label='Email'
              name='Email'
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <p className='txt-center'>What's your favorite pet name?</p>
            <Form.Item
              className='ortex-form-fields'
              label='Answer'
              name='Answer'
              rules={[
                {
                  required: true,
                  message: 'Please enter you security answer!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default PasswordResetForm;
