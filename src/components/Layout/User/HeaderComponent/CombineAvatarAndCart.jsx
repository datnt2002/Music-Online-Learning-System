import React from 'react';

import { Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import AvatarDropdown from './AvatarDropdown';
import CartHoverDropDown from '../../../Container/Cart/CartHoverDropDown';

const CombineAvatarAndCart = () => {
  return (
    <Space>
      <CartHoverDropDown buttonTitle="Go to Cart" icon={<ShoppingCartOutlined className="text-2xl mr-2" />} />
      <AvatarDropdown />
    </Space>
  );
};

export default CombineAvatarAndCart;
