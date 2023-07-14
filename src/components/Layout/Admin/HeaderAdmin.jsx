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
        <div className="group relative">
          <Avatar className="" size="large" icon={<UserOutlined />} />
          <div className="absolute hidden w-8 group-hover:block">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderAdmin;
