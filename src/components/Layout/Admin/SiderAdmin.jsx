import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import {
  DesktopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BookOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';

import { ADMIN_ROUTE } from '../../../constants';

const SiderAdmin = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    {
      key: ADMIN_ROUTE.DASHBOARD,
      label: 'Dashboard',
      icon: <PieChartOutlined />,
    },
    {
      key: 'Courses',
      label: 'Courses',
      icon: <DesktopOutlined />,
      children: [
        {
          key: ADMIN_ROUTE.LIST_COURSES,
          label: 'List Courses',
          icon: <BookOutlined />,
        },
        {
          key: ADMIN_ROUTE.PENDING_COURSES,
          label: 'Pending Courses',
          icon: <AppstoreAddOutlined />,
        },
      ],
    },
    {
      key: 'Accounts',
      label: 'Accounts',
      icon: <UserOutlined />,
      children: [
        {
          key: ADMIN_ROUTE.LIST_ACCOUNTS,
          label: 'List Accounts',
          icon: <TeamOutlined />,
        },
        {
          key: ADMIN_ROUTE.LECTURER_REQUESTS,
          label: 'Lecturer Requests',
          icon: <TeamOutlined />,
        },
      ],
    },
    {
      title: '',
      key: 'collapse',
      label: (
        <Button
          className="!w-full border-none"
          onClick={() => setCollapsed(!collapsed)}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        ></Button>
      ),
    },
  ];
  return (
    <Sider
      className="w-52"
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        className="h-full"
        mode="inline"
        items={items}
        onClick={({ key }) => {
          if (key !== 'collapse') {
            navigate(key);
          }
        }}
      />
    </Sider>
  );
};

export default SiderAdmin;
