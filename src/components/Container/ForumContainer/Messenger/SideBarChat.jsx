import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import { Avatar } from 'antd';
import Search from 'antd/es/input/Search';
import { useNavigate } from 'react-router-dom';
import { USER_ROUTE } from '../../../../constants/route';
import { useDispatch, useSelector } from 'react-redux';
import { getListAccountAction } from '../../../../redux/slice/userSlice';
import defaultAvatar from '../../../../assets/imgs/defaultAvatar.webp';

const SideBarChat = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const onSearchFriend = (value) => console.log(value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const listUser = useSelector((state) => state.user.listAccounts);
  console.log(listUser);

  useEffect(() => {
    dispatch(getListAccountAction({}));
  }, []);

  const handleChooseChat = (userId) => {
    navigate(USER_ROUTE.MESSAGES + `/${userId}`);
  };
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
      {listUser.map((user) => {
        return (
          <div className="flex p-2 r hover:bg-gray-300 rounded-xl" onClick={() => handleChooseChat(user?.id)}>
            <Avatar src={user?.avatar || defaultAvatar} />
            <h1 className=" ml-2 self-center">{user?.username}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default SideBarChat;
