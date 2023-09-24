import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, Dropdown, Space } from 'antd';

import { logoutAction } from '../../../redux/slice/authenticationSlice';
import { PUBLIC_ROUTE } from '../../../constants';
import adminAvatar from '../../../assets/imgs/adminAvatar.png';

const AvatarAdmin = () => {
  const currentUser = useSelector((state) => {
    return state.authentication.currentUser;
  });

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const items = [
    {
      key: '1',
      disabled: true,
      label: (
        <Space className="flex">
          <Avatar size={43} src={adminAvatar} alt="Avatar" />
          <div className="flex flex-col">
            <p>{currentUser.username}</p>
            <p>{currentUser.email}</p>
          </div>
        </Space>
      ),
    },
    {
      type: 'divider',
    },

    {
      key: '2',
      label: <Link>Messages</Link>,
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: (
        <Link to={PUBLIC_ROUTE.SIGN_IN} onClick={handleLogout}>
          Log out
        </Link>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items }}>
      <Avatar size={43} src={adminAvatar} alt="Avatar" />
    </Dropdown>
  );
};

export default AvatarAdmin;
