import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, Dropdown, Space } from 'antd';

import { logoutAction } from '../../../../redux/slice/authenticationSlice';
import { PUBLIC_ROUTE, USER_ROUTE } from '../../../../constants';
import defaultAvatar from '../../../../assets/imgs/defaultAvatar.webp';

const AvatarDropdown = () => {
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
      label: (
        <Link to={USER_ROUTE.USER_PROFILE}>
          <Space className="flex">
            <Avatar size={43} src={currentUser?.avatar || defaultAvatar} alt="Avatar" />
            <div className="flex flex-col">
              <p>{currentUser?.username}</p>
              <p>{currentUser?.email}</p>
            </div>
          </Space>
        </Link>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: <Link>My Learning</Link>,
    },
    {
      key: '3',
      label: <Link to={USER_ROUTE.USER_CART}>My Cart</Link>,
    },
    {
      key: '4',
      label: <Link to={USER_ROUTE.USER_WISHLIST}>Wishlist</Link>,
    },
    {
      type: 'divider',
    },
    {
      key: '5',
      label: <Link>Messages</Link>,
    },
    {
      type: 'divider',
    },
    {
      key: '6',
      label: <Link>Payment methods</Link>,
    },
    {
      key: '7',
      label: <Link>Purchase History</Link>,
    },
    {
      type: 'divider',
    },
    {
      key: '8',
      label: <Link>Help</Link>,
    },
    {
      key: '9',
      label: (
        <Link to={PUBLIC_ROUTE.SIGN_IN} onClick={handleLogout}>
          Log out
        </Link>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Avatar size={43} src={currentUser.avatar || defaultAvatar} alt="Avatar" />
    </Dropdown>
  );
};

export default AvatarDropdown;
