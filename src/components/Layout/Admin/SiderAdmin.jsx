import { Link } from 'react-router-dom';

import { Button, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';
import {
  DesktopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BookOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const SiderAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu className="h-full" mode="inline">
        <Menu.Item key={1} icon={<PieChartOutlined />}>
          <Link to="/admin/dashboard">DashBoard</Link>
        </Menu.Item>
        <Menu.SubMenu key="courses" title="Courses" icon={<DesktopOutlined />}>
          <Menu.Item key={2} icon={<BookOutlined />}>
            <Link to="/admin/list-courses">List Courses</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="accounts" title="Accounts" icon={<UserOutlined />}>
          <Menu.Item key={2} icon={<TeamOutlined />}>
            <Link to="/admin/list-accounts">List Accounts</Link>
          </Menu.Item>
        </Menu.SubMenu>

        <div className="w-[95%] text-center mx-auto">
          <Button
            className="!w-full"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>
      </Menu>
    </Sider>
  );
};

export default SiderAdmin;
