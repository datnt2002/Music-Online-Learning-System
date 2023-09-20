import { Form, Input } from 'antd';
import React from 'react';
import { FORM_FIELDS } from '../../../constants/formfield';
import { SearchOutlined } from '@ant-design/icons';

const Searchbox = () => {
  const handleSearch = (values) => {
    console.log('Success:', values);
  };
  return (
    <Form onFinish={handleSearch} className="flex flex-1 justify-center h-full">
      <Form.Item name={FORM_FIELDS.SEARCH} className="w-2/3">
        <Input prefix={<SearchOutlined />} className="rounded-full top-4" />
      </Form.Item>
    </Form>
  );
};

export default Searchbox;
