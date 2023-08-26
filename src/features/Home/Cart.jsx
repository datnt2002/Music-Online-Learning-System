import React from 'react';

import { Button, Divider } from 'antd';
import CardCart from '../../components/Container/Cart/CardCart';

const Cart = () => {
  return (
    <div className="px-40 pt-10">
      <h1 className="text-4xl font-semibold">Shopping Cart</h1>
      <div className="flex">
        <div className="flex flex-col flex-1">
          <h1 className="my-4">1 Course in Cart</h1>
          <Divider className="m-2" />
          <div className="mr-10">
            <CardCart />
          </div>
        </div>
        <div className="flex basis-1/3 ml-10">
          <div class="flex flex-1 flex-col rounded-lg border p-6 shadow-xl">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700">$129.99</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping</p>
              <p class="text-gray-700">$4.99</p>
            </div>
            <Divider />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                <p class="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <Button className="mt-6 w-full rounded-md py-1.5 font-medium">Check out</Button>
          </div>
        </div>
      </div>

      <div className="my-20">
        <h1 className="text-4xl font-semibold">You might also like</h1>
      </div>
    </div>
  );
};

export default Cart;
