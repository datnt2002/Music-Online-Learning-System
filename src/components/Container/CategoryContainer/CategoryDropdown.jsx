import { Dropdown, Space } from 'antd';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';

const CategoryDropdown = () => {
  const items = [
    {
      key: '2',
      label: 'sub menu',
      children: [
        {
          key: '2-1',
          label: '3rd menu item',
        },
        {
          key: '2-2',
          label: '4th menu item',
        },
      ],
    },
    {
      key: '3',
      label: 'disabled sub menu',
      children: [
        {
          key: '3-1',
          label: '5d menu item',
        },
        {
          key: '3-2',
          label: '6th menu item',
        },
      ],
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
      className="cursor-pointer"
    >
      <Space>
        Category
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default CategoryDropdown;
