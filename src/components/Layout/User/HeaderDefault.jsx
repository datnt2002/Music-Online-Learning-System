import React from 'react';
import { Form, Input, Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Header } from 'antd/es/layout/layout';
import AuthenticationButton from './HeaderComponent/AuthenticationButton';
import { FORM_FIELDS } from '../../../constants/formfield';
import AvatarDropdown from './HeaderComponent/AvatarDropdown';

const HeaderDefault = () => {
  const handleSearch = (values) => {
    console.log('Success:', values);
  };
  return (
    <Layout>
      <Header className="flex items-center bg-[#F39D39] ">
        {/* Logo */}
        <div className="flex basis-32 text-[#F5F5F5] text-xl ">LauGau</div>
        {/* Searchbox */}
        <Form onFinish={handleSearch} className="flex flex-1 justify-center h-full">
          <Form.Item name={FORM_FIELDS.SEARCH} rules={[{ required: true }]} className="w-2/3">
            <Input prefix={<SearchOutlined />} className="rounded-full top-4" />
          </Form.Item>
        </Form>

        {/* navigation */}
        <div className="flex basis-36">
          <Link to="">About us</Link>
          <Link to="">About us</Link>
        </div>

        <div className="flex basis-32">
          <AuthenticationButton />
          {/* <AvatarDropdown /> */}
        </div>

        {/* dark mode */}
        <div className="flex basis-20"></div>
      </Header>
    </Layout>
  );
};

export default HeaderDefault;
