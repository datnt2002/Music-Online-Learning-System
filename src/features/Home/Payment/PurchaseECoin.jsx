import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Button, Divider, Form, Input } from 'antd';

import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import { USER_ROUTE, amount } from '../../../constants';
import formatPrice from '../../../utils/formatPrice';
import { createPaymentAction } from '../../../redux/slice/courseSlice';

const PurchaseECoin = () => {
  const [amountExchange, setAmountExchange] = useState(0);
  const dispatch = useDispatch();

  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = pathname.split('/').filter((item) => {
    return item;
  });

  const handleInputAmount = (values) => {
    setAmountExchange(values.amount);
  };

  const handleCheckout = () => {
    dispatch(
      createPaymentAction({
        amount: amountExchange,
        bankCode: pathNameArray[2],
      })
    );
  };
  return (
    <>
      <Divider className="bg-black mt-0" />
      <div
        style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}
        className="min-h-screen px-4 md:px-8 lg:px-12 py-8 md:py-12"
      >
        <div className="md:px-10 lg:px-20 pt-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Purchase ECoin</h1>
          <div className="flex w-full flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-2/3 mr-0 lg:mr-4 mb-4 lg:mb-0">
              <h1 className="my-4">ECoin for Buying Course: 100,000 VND = 100 E-coin</h1>
              <Divider className="bg-black" />
              {/* left section */}
              <div className="flex basis-1/3 ">
                <div className="flex flex-1 flex-col rounded-2xl border border-black p-6 shadow-xl">
                  <div className="mb-2 flex justify-between">
                    <p className="text-gray-700 text-sm lg:text-base">Payment method:</p>
                    <p className="text-gray-700 text-sm lg:text-base">
                      Online Banking (
                      <Link to={USER_ROUTE.PAYMENT} className="underline">
                        Change
                      </Link>
                      )
                    </p>
                  </div>

                  <p className="text-gray-700 mb-6">Select amount: VND</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {amount.map((amount, index) => {
                      return (
                        <Button
                          key={index}
                          className="h-12 border border-black cursor-pointer "
                          onClick={() => {
                            setAmountExchange(amount.name);
                          }}
                        >
                          {formatPrice(amount.name)}
                        </Button>
                      );
                    })}
                  </div>
                  <Divider />
                  <p className="text-gray-700 mb-4">Or enter amount: The amount entered must be a multiple of 10</p>
                  <div className="">
                    <Form
                      labelCol={{
                        span: 5,
                      }}
                      wrapperCol={{
                        span: 24,
                      }}
                      onFinish={handleInputAmount}
                      className="flex flex-col md:flex-row md:justify-between"
                    >
                      <Form.Item label="Amount" name="amount" className="flex-1 md:mr-4">
                        <Input className="w-full" />
                      </Form.Item>

                      <Form.Item>
                        <Button type="primary" htmlType="submit" className="bg-black">
                          Exchange
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
            </div>

            {/* right section */}
            <div className="w-full lg:w-1/3">
              <div className="rounded-lg border border-black p-6 shadow-xl mb-4">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Amount</p>
                  <p className="text-gray-700">{formatPrice(amountExchange)} VND</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Receive</p>
                  <p className="text-gray-700">{parseInt(amountExchange) / 1000} E-coin</p>
                </div>
                <Divider />
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="lg:ml-auto">
                    <p className="mb-1 text-lg font-bold">{formatPrice(amountExchange)} VND</p>
                    <p className="text-sm text-gray-700">including VAT</p>
                  </div>
                </div>
                <Button onClick={handleCheckout} className="mt-6 w-full rounded-md bg-black text-white font-medium">
                  Check out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseECoin;
