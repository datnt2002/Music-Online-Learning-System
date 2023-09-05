import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  BookOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const SiderAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu className="h-full" mode="inline">
        <Menu.Item key={1} icon={<PieChartOutlined />}>
          <Link>DashBoard</Link>
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
      </Menu>
    </Sider>
  );
};

export default SiderAdmin;
