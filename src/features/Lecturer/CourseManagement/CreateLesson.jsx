import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';
import StepsCustom from '../../../components/Container/StepsContainer/StepsCustom';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { Content } from 'antd/es/layout/layout';

/* eslint-disable no-template-curly-in-string */

/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const CreateLesson = () => {
  return (
    <Content>
      <div className="p-6">
        <div className="pl-6">
          <BreadCrumbCustom />
        </div>
        <StepsCustom />
        <div className="flex flex-col border bg-white shadow-2xl rounded-2xl p-6">
          <h1 className="font-semibold text-2xl">Create New Lesson</h1>
          <Form name="create-lesson" onFinish={onFinish} className="flex">
            <div>
              <Form.Item name="" label="Name">
                <Input />
              </Form.Item>
              <Form.Item name="" label="Email">
                <Input />
              </Form.Item>
              <Form.Item name="" label="Age">
                <InputNumber />
              </Form.Item>
              <Form.Item name="" label="Website">
                <Input />
              </Form.Item>
              <Form.Item name="" label="Introduction">
                <Input.TextArea />
              </Form.Item>
            </div>
            <div className="flex flex-col">
              <Dragger>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned
                  files.
                </p>
              </Dragger>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </Content>
  );
};

export default CreateLesson;
