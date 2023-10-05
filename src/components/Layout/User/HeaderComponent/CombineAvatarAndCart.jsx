import React from 'react';

import { Space } from 'antd';

import AvatarDropdown from './AvatarDropdown';
import CartAndWishList from './CartAndWishList';

const CombineAvatarAndCart = () => {
  return (
    <Space>
      <CartAndWishList />
      <AvatarDropdown />
    </Space>
  );
};

export default CombineAvatarAndCart;
