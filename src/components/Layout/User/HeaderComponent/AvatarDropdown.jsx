import React from 'react';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Space } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartHoverDropDown from '../../../Container/Cart/CartHoverDropDown';

const items = [
  {
    key: '1',
    label: (
      <Link to="/profile">
        <Space className="flex">
          <Avatar
            size={43}
            src="https://thichthucung.com/wp-content/uploads/meo-beo-phi-co-nguy-hiem-khong.jpg"
            alt="Avatar"
          />
          <div className="flex flex-col">
            <p>Username</p>
            <p>Email</p>
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
    label: <Link>My Cart</Link>,
  },
  {
    key: '4',
    label: <Link>Wishlist</Link>,
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
    label: <Link>Log out</Link>,
  },
];
const AvatarDropdown = () => {
  const currentUser = useSelector((state) => {
    return state.authentication.currentUser;
  });
  console.log(currentUser);

  return (
    <Space size="large">
      <Space size="large">
        <CartHoverDropDown buttonTitle="Go to Wishlist" icon={<HeartOutlined className="text-2xl" />} />
        <CartHoverDropDown buttonTitle="Go to Cart" icon={<ShoppingCartOutlined className="text-2xl" />} />
      </Space>

      <Dropdown menu={{ items }}>
        <Avatar
          size={43}
          src="https://thichthucung.com/wp-content/uploads/meo-beo-phi-co-nguy-hiem-khong.jpg"
          alt="Avatar"
        />
      </Dropdown>
    </Space>
  );
};

export default AvatarDropdown;
