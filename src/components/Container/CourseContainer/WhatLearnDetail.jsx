import React from 'react';
import { CheckOutlined } from '@ant-design/icons';

const WhatLearnDetail = () => {
  return (
    <div className="rounded-2xl border-2 shadow-md border-black py-4 ">
      <h2 className="text-xl mx-6 mb-2 font-medium"> What you learn in this course</h2>
      <ul className="flex flex-wrap justify-between mx-6">
        <li className="mb-1">
          <CheckOutlined className="align-[0.125rem]" /> HỌC đi đôi với "THỰC HÀNH", xây dựng ĐAM MÊ về lập trình với
          REACT
        </li>
        <li className="mb-1">
          <CheckOutlined className="align-[0.125rem]" /> HỌC đi đôi với "THỰC HÀNH", xây dựng ĐAM MÊ về lập trình với
          REACT
        </li>
        <li className="mb-1">
          <CheckOutlined className="align-[0.125rem]" /> HỌC đi đôi với "THỰC HÀNH", xây dựng ĐAM MÊ về lập trình với
          REACT
        </li>
        <li className="mb-1">
          <CheckOutlined className="align-[0.125rem]" /> HỌC đi đôi với "THỰC HÀNH", xây dựng ĐAM MÊ về lập trình với
          REACT
        </li>
      </ul>
    </div>
  );
};

export default WhatLearnDetail;
