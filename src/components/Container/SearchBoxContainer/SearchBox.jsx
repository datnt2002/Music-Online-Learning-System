import { Form, Input } from 'antd';
import React from 'react';
import { FORM_FIELDS } from '../../../constants/formfield';
import { SearchOutlined } from '@ant-design/icons';

const Searchbox = () => {
  const handleSearch = (values) => {
    console.log('Success:', values);
  };
  return (
    <Form onFinish={handleSearch} className="w-full mr-5">
      <Form.Item name={FORM_FIELDS.SEARCH}>
        <Input prefix={<SearchOutlined />} className="rounded-full top-4 border-black" />
      </Form.Item>
    </Form>
  );
};

export default Searchbox;
