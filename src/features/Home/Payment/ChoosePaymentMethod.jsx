import { Button, Divider, Space } from 'antd';
import React from 'react';
import { LeftOutlined } from '@ant-design/icons';

const ChoosePaymentMethod = () => {
  return (
    <div className="w-2/4 mt-10 mx-auto border rounded-2xl shadow-xl overflow-hidden">
      <div>
        <img
          src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1.png"
          alt=""
          className="w-40 pt-5 px-5"
        />
        <Divider className="mb-0" />

        <div className="flex flex-col bg-gray-100 text-center px-7 py-5">
          <h1 className="font-medium text-3xl mb-5">Select payment method</h1>
          <div className="flex flex-col gap-4">
            <div className="flex bg-white p-8 align-middle hover:shadow-2xl cursor-pointer">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="w-24 "
              />
              <h1>VNpay scanncer app</h1>
              {/* <img src="" alt="" /> */}
            </div>
            <div className="bg-white p-8 align-middle hover:shadow-2xl cursor-pointer">VNpay scanncer app</div>
            <div className="bg-white p-8 align-middle hover:shadow-2xl cursor-pointer">VNpay scanncer app</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePaymentMethod;
