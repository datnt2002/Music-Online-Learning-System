import { Button, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_ROUTE } from '../../../../constants/route';

const AuthenticationButton = () => {
  return (
    <Space className="flex-col md:flex-row">
      <Link to={PUBLIC_ROUTE.SIGN_IN}>
        <Button className="border border-black">Sign in</Button>
      </Link>
      <Link to={PUBLIC_ROUTE.SIGN_UP}>
        <Button className="border border-black">Sign up</Button>
      </Link>
    </Space>
  );
};

export default AuthenticationButton;
