import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const iconRoutes = [
  { key: '1', icon: <LaptopOutlined />, link: '/admin/list-courses', label: 'Courses Manage' },
  { key: '2', icon: <UserOutlined />, link: '/admin/list-accounts', label: 'Accounts Manage' },
  { key: '3', icon: <NotificationOutlined />, link: '/route3' },
];

const SiderAdmin = () => {
  return (
    <Sider className="w-52">
      <Menu mode="inline" className="h-full border-r-8">
        {iconRoutes.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.link}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SiderAdmin;
