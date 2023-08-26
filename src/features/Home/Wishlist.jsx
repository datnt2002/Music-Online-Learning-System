import { Divider } from 'antd';
import React from 'react';
import CardCart from '../../components/Container/Cart/CardCart';

const Wishlist = () => {
  return (
    <div className="px-40 pt-10">
      <h1 className="text-4xl font-semibold">WishList</h1>
      <div className="flex">
        <div className="flex flex-col flex-1">
          <h1 className="my-4">1 Course in Wishlist</h1>
          <Divider className="m-2" />
          <div className="mr-10">
            <CardCart />
          </div>
        </div>
      </div>

      <div className="my-20">
        <h1 className="text-4xl font-semibold">You might also like</h1>
      </div>
    </div>
  );
};

export default Wishlist;
