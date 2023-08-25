import React from 'react';

import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const CartHoverDropDown = ({ icon, buttonTitle }) => {
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      type: 'divider',
    },
    {
      key: 'button',
      label: <Link>{buttonTitle}</Link>,
    },
  ];
  return (
    <Dropdown
      placement="bottom"
      menu={{
        items,
      }}
    >
      <Space>{icon}</Space>
    </Dropdown>
  );
};

export default CartHoverDropDown;
