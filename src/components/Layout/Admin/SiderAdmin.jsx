import { Link } from 'react-router-dom';

import { Button, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {
  DesktopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BookOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
// function getItem(label, key, icon, items, type) {
//   return {
//     key,
//     icon,
//     items,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem('Navigation One', 'sub1', <MailOutlined />, [
//     getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
//     getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
//   ]),
//   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//     getItem('Option 5', '5'),
//     getItem('Option 6', '6'),
//     getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
//   ]),
//   {
//     type: 'divider',
//   },
//   getItem('Navigation Three', 'sub4', <SettingOutlined />, [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Option 11', '11'),
//     getItem('Option 12', '12'),
//   ]),
//   getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
// ];
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
          <Menu.Item key={3} icon={<TeamOutlined />}>
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
