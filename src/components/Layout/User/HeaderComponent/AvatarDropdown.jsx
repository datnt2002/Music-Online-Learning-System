import React from 'react';
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const items = [
  {
    key: '1',
    label: <Link to="/profile">1st menu item</Link>,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
];
const AvatarDropdown = () => {
  const currentUser = useSelector((state) => {
    return state.authentication.currentUser;
  });
  console.log(currentUser);

  return (
    <>
      <div className="">
        <ShoppingCartOutlined className="text-2xl" />
      </div>

      <Dropdown menu={{ items }}>
        <Space>
          <DownOutlined />
        </Space>
      </Dropdown>
      {/* personal info */}
      {/* <div>
            <img
              src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
              alt="avatar"
              className="w-10 rounded-full aspect-square"
            />
            <Link to="/profile">{currentUser.username}</Link>
            <h2>{currentUser.email}</h2>
          </div>
          <div>
            <h3>My Learning</h3>
            <h3>My Cart</h3>
            <h3>WishList</h3>
            <h3>Teach on</h3>
          </div>
          <div>
            <h3>Notification</h3>
            <h3>Message</h3>
          </div>
          <div>
            <h3>My Learning</h3>
            <h3>My Cart</h3>
            <h3>WishList</h3>
            <h3>Teach on</h3>
            <h3>Teach on</h3>
          </div>
          <div>
            <h3>Log out</h3>
            <h3>Message</h3>
          </div> */}

      {/* </div> */}
    </>
  );
};

export default AvatarDropdown;
