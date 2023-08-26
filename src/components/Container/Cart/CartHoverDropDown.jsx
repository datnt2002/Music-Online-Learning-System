import React from 'react';
import { Link } from 'react-router-dom';

import { Dropdown, Space } from 'antd';

import CardInCart from './CardInCart';

const CartHoverDropDown = ({ icon, buttonTitle }) => {
  const items = [
    {
      key: '1',
      label: <CardInCart />,
    },
    {
      key: '1',
      label: <CardInCart />,
    },
    {
      key: '1',
      label: <CardInCart />,
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
