import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { DesktopOutlined, BookOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

const SiderLecturer = () => {
  return (
    <Sider className="w-52">
      <Menu className="h-full" mode="inline">
        <Menu.Item key={1} icon={<PieChartOutlined />}>
          <Link>DashBoard</Link>
        </Menu.Item>
        <Menu.SubMenu key="courses" title="Courses" icon={<DesktopOutlined />}>
          <Menu.Item key={2} icon={<BookOutlined />}>
            <Link to="">My Courses</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="accounts" title="Accounts" icon={<UserOutlined />}>
          <Menu.Item key={2} icon={<TeamOutlined />}>
            <Link to=""></Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default SiderLecturer;
