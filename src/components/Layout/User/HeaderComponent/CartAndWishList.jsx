import { Space } from 'antd';
import React from 'react';
import CartHoverDropDown from '../../../Container/Cart/CartHoverDropDown';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

const CartAndWishList = () => {
  return (
    <Space size="large">
      <CartHoverDropDown buttonTitle="Go to Wishlist" icon={<HeartOutlined className="text-2xl" />} />
      <CartHoverDropDown buttonTitle="Go to Cart" icon={<ShoppingCartOutlined className="text-2xl" />} />
    </Space>
  );
};

export default CartAndWishList;
