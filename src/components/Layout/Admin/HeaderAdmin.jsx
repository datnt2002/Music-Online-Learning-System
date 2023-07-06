import React from 'react';

import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Search from 'antd/es/input/Search';
import Avatar from 'antd/es/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';

const HeaderAdmin = () => {
  const onSearch = (value) => console.log(value);
  return (
    <Layout>
      <Header className="flex items-center bg-[#F39D39] ">
        <div className="demo-logo text-[#F5F5F5]">LauGau</div>
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <Avatar size="large" icon={<UserOutlined />} />
      </Header>
    </Layout>
  );
};

export default HeaderAdmin;
