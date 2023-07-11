import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const HeaderAuthen = () => {
  return (
    <>
      <ShoppingCartOutlined />
      <div>
        <img
          src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
          alt=""
          className="w-16 rounded-full"
        />
      </div>
    </>
  );
};

export default HeaderAuthen;
