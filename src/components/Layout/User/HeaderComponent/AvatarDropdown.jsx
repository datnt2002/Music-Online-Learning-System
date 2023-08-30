import React from 'react';

import { Avatar, Dropdown, Space } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import DefaultAvatar from '../../../../assets/imgs/defaultAvatar.webp';

const AvatarDropdown = () => {
  const currentUser = useSelector((state) => {
    return state.authentication.currentUser;
  });
  const handleLogout = () => {};
  console.log(currentUser);

  const items = [
    {
      key: '1',
      label: (
        <Link to="/user/profile">
          <Space className="flex">
            <Avatar size={43} src={currentUser.avatar ? currentUser.avatar : DefaultAvatar} alt="Avatar" />
            <div className="flex flex-col">
              <p>{currentUser.username}</p>
              <p>{currentUser.email}</p>
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
      label: <Link to="/user/my-cart">My Cart</Link>,
    },
    {
      key: '4',
      label: <Link to="/user/my-wishlist">Wishlist</Link>,
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
      label: <Link onClick={handleLogout}>Log out</Link>,
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Avatar
        size={43}
        src="https://thichthucung.com/wp-content/uploads/meo-beo-phi-co-nguy-hiem-khong.jpg"
        alt="Avatar"
      />
    </Dropdown>
  );
};

export default AvatarDropdown;
