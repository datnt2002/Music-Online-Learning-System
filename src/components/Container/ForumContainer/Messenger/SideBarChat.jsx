import React from 'react';
import ContactRow from '../ContactsContainer/ContactRow';
import { SearchOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

const SideBarChat = () => {
  return (
    <div className="flex flex-col basis-1/5 bg-red-200 p-2">
      <div className="flex justify-between">
        <h1>Contacts</h1>
        <SearchOutlined />
      </div>
      <Divider className="mt-1 bg-black" />
      <ContactRow />
    </div>
  );
};

export default SideBarChat;
