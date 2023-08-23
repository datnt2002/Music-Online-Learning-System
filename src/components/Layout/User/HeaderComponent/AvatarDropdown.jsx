import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
      <div className="group">
        <img
          src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
          alt="avatar"
          className="w-10 rounded-full aspect-square"
        />
        {/* hover avatar dropdown */}
        <div className="fixed hidden bg-red-800 w-52 top-[4.2rem] z-50 group-hover:block">
          {/* personal info */}
          <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AvatarDropdown;
