import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from 'antd/es/layout/layout';
import { Form, Input, Layout, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import AuthenticationButton from './HeaderComponent/AuthenticationButton';
import { FORM_FIELDS } from '../../../constants/formfield';
import CombineAvatarAndCart from './HeaderComponent/CombineAvatarAndCart';

const HeaderDefault = () => {
  const handleSearch = (values) => {
    console.log('Success:', values);
  };

  let isAuthenticated = false;
  if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
    isAuthenticated = true;
  }

  return (
    <Layout>
      <Header className="flex items-center bg-[#F39D39] h-16">
        {/* Logo */}
        <Link className="flex basis-32 text-[#F5F5F5] text-xl" to="/">
          LauGau
        </Link>
        {/* Searchbox */}
        <Form onFinish={handleSearch} className="flex flex-1 justify-center h-full">
          <Form.Item name={FORM_FIELDS.SEARCH} rules={[{ required: true }]} className="w-2/3">
            <Input prefix={<SearchOutlined />} className="rounded-full top-4" />
          </Form.Item>
        </Form>

        {/* navigation */}
        <Space className="flex basis-36">
          <Link to="">About us</Link>
          <Link to="">About us</Link>
        </Space>

        <div className="flex basis-32">{isAuthenticated ? <CombineAvatarAndCart /> : <AuthenticationButton />}</div>

        {/* dark mode */}
        <div className="flex basis-20"></div>
      </Header>
    </Layout>
  );
};

export default HeaderDefault;
