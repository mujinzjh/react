import React, { Component, RefObject, createRef } from "react";
import { Button, Form, FormInstance, Input, Space } from "antd";
import "../../css/login.css";
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

class Login extends Component {
  formRef: RefObject<FormInstance>

  constructor(props: any, content: any) {
    super(props, content);
    this.formRef = createRef<FormInstance>()
  }

  render() {
    return (
      <>
        <Form
          id="login-form"
          {...layout}
          ref={this.formRef}>
          <Form.Item label='用户名' name='userName'
            rules={[
              {
                required: true,
                type: 'string'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label='密码' name='password' rules={[
            {
              required: true,
              type: 'string'
            }
          ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type='primary' htmlType='submit'>
                登录
              </Button>
              <Button type='primary' htmlType='reset'>
                重置
              </Button>
            </Space>

          </Form.Item>
        </Form>
      </>
    )
  }
}

export default Login;


