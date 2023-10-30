import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const ContactRow = () => {
  return (
    <div className="flex p-2 r hover:bg-gray-300 rounded-xl">
      <Avatar icon={<UserOutlined />} />
      <h1 className=" ml-2 self-center">Name</h1>
    </div>
  );
};

export default ContactRow;
