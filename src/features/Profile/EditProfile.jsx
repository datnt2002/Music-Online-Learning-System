import React from 'react';

import { Button, Form, Input, InputNumber, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const EditProfile = () => {
  const onFinish = (values) => {
    console.log('form', values);
  };
  return (
    <>
      <Form layout="horizontal" onFinish={onFinish}>
        <Form.Item label="Course Name" name="CourseName">
          <Input />
        </Form.Item>
        <Form.Item label="Category" name="Category">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Price" name="Price">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Description" name="Description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditProfile;
