import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const iconRoutes = [
  { key: '1', icon: <LaptopOutlined />, link: '/lecturer/list-courses', label: 'Courses Manage' },
  { key: '2', icon: <NotificationOutlined />, link: '/route3' },
];

const SiderLecturer = () => {
  return (
    <Sider className="w-52">
      <Menu mode="inline" defaultSelectedKeys={['1']} className="h-full border-r-8">
        {iconRoutes.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.link}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SiderLecturer;
