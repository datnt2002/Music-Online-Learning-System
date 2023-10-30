import React from 'react';
import ContactRow from './ContactRow';
import { SearchOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

const ContactSideBar = () => {
  return (
    <div className="flex flex-col basis-1/5 bg-red-200 p-2">
      <div className="flex justify-between">
        <h1>Contacts</h1>
        <SearchOutlined />
      </div>
      <Divider className="mt-1 bg-black" />
      <ContactRow />
      <ContactRow />
      <ContactRow />
      <ContactRow />
    </div>
  );
};

export default ContactSideBar;
