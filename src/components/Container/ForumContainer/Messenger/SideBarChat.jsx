import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Search from 'antd/es/input/Search';

const SideBarChat = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const onSearchFriend = (value) => console.log(value);
  return (
    <div className="flex flex-col w-full border border-black m-4 rounded-3xl p-4">
      <div>
        <div className="flex justify-between">
          <h1 className="text-xl">Contacts</h1>
          <SearchOutlined
            className="text-xl"
            onClick={() => {
              setOpenSearch((prev) => !prev);
            }}
          />
        </div>
        {openSearch && (
          <Search className="w-full my-2" placeholder="search friend" allowClear onSearch={onSearchFriend} />
        )}
      </div>
      <Divider className="my-1 bg-black" />
      <div className="flex p-2 r hover:bg-gray-300 rounded-xl">
        <Avatar icon={<UserOutlined />} />
        <h1 className=" ml-2 self-center">Name</h1>
      </div>
    </div>
  );
};

export default SideBarChat;
