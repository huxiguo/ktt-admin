import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import './index.css'
// 验证成功
const onFinish = (values: any) => {
  console.log('Success:', values)
}
// 验证失败
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
const LoginView: React.FC = () => {
  return (
    <div className="loginBox">
      <h2>
        <span>ktt</span>登录
      </h2>
      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" block htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginView
