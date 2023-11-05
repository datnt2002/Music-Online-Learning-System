import React from 'react';
import { Button, Divider, Form, Input } from 'antd';

import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import { Link } from 'react-router-dom';
import { amount } from '../../../constants/banks';

const PurchaseECoin = () => {
  const handleInputAmount = () => {};
  return (
    <>
      <Divider className="bg-black mt-0" />
      <div style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }} className="h-screen">
        <div className="px-40 pt-10">
          <h1 className="text-4xl font-semibold">Purchase ECoin</h1>
          <div className="flex">
            <div className="flex flex-col flex-1">
              <h1 className="my-4">ECoin for Buying Course: 100,000 VND = 100 E-coin</h1>
              <Divider className="m-2" />
              <div className="mr-10">
                <div className="flex basis-1/3 ">
                  <div class="flex flex-1 flex-col rounded-lg border p-6 shadow-xl">
                    <div class="mb-2 flex justify-between">
                      <p class="text-gray-700">Payment method:</p>
                      <p class="text-gray-700">
                        Online Banking (<Link className="underline">Change</Link>)
                      </p>
                    </div>

                    <p class="text-gray-700">Select amount:</p>
                    <div className="grid grid-cols-4 gap-3">
                      {amount.map((amount, index) => {
                        return (
                          <Button key={index} className="h-12 border border-black cursor-pointer " onClick={() => {}}>
                            {amount.name}
                          </Button>
                        );
                      })}
                    </div>
                    <Divider />
                    <p class="text-gray-700">Or enter amount: </p>
                    <div className="">
                      <Form
                        name="basic"
                        labelCol={{
                          span: 8,
                        }}
                        wrapperCol={{
                          span: 16,
                        }}
                        style={{
                          maxWidth: 600,
                        }}
                        onFinish={handleInputAmount}
                      >
                        <Form.Item
                          label="Username"
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your username!',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          wrapperCol={{
                            offset: 8,
                            span: 16,
                          }}
                        >
                          <Button type="primary" htmlType="submit">
                            Submit
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  </div>
                </div>
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
        </div>
      </div>
    </>
  );
};

export default PurchaseECoin;
