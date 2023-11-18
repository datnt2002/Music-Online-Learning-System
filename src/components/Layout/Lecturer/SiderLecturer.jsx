import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import {
  DesktopOutlined,
  BookOutlined,
  PieChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FolderAddOutlined,
  FileAddOutlined,
} from '@ant-design/icons';
import { LECTURER_ROUTE } from '../../../constants';

const SiderLecturer = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const items = [
    {
      key: LECTURER_ROUTE.DASHBOARD,
      label: 'Dashboard',
      icon: <PieChartOutlined />,
    },
    {
      key: 'Courses',
      label: 'Courses',
      icon: <DesktopOutlined />,
      children: [
        {
          key: LECTURER_ROUTE.MY_COURSE_MANAGEMENT,
          label: 'My Courses',
          icon: <BookOutlined />,
        },
        {
          key: LECTURER_ROUTE.CREATE_NEW_COURSE,
          label: 'Create Course',
          icon: <FolderAddOutlined />,
        },
        // {
        //   key: LECTURER_ROUTE.ADD_SECTION,
        //   label: 'Add Section',
        //   icon: <FileAddOutlined />,
        // },
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

export default SiderLecturer;
