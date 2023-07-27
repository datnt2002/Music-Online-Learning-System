import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `${key}`,
    icon: React.createElement(icon),
    label: ['ahaha', 'ghhgh'],
  };
});

const SiderAdmin = () => {
  return (
    <Sider className="w-52">
      <Menu mode="inline" defaultSelectedKeys={['1']} className="h-full border-r-8" items={items2} />
    </Sider>
  );
};

export default SiderAdmin;
