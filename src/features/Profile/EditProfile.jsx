import React from 'react';

import { Avatar, Badge, Button, Card, DatePicker, Form, Input, Select } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';

const EditProfile = () => {
  const onFinish = (values) => {
    console.log('form', values);
  };
  return (
    <>
      <div>
        <h1>BreadCrum</h1>
      </div>

      <div className="bg-slate-700">
        <Form layout="horizontal" onFinish={onFinish}>
          <Form.Item>
            <Badge count={<EditOutlined />}>
              <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
          </Form.Item>
          <Form.Item label="First Name" name="CourseName">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="CourseName">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="CourseName">
            <Input.Password placeholder="input password" />
            <Button>Change Password</Button>
          </Form.Item>
          <Form.Item label="Email" name="CourseName">
            <Input />
          </Form.Item>
          <Form.Item label="Phone Number" name="CourseName">
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="CourseName">
            <Input />
          </Form.Item>
          <Form.Item label="Nation" name="CourseName">
            <Input />
          </Form.Item>
          <Form.Item label="Gender" name="Category">
            <Select>
              <Select.Option value="demo">demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date Of Birth" name="Price">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Facebook" name="CourseName">
            <Input />
          </Form.Item>
          <Form.Item label="Introduce" name="CourseName">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        <h1>Payment method</h1>
        <Card></Card>
        <Card></Card>
        <Button>Add Payment Method</Button>
      </div>
    </>
  );
};

export default EditProfile;
