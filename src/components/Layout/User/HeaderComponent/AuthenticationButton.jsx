import { Button, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const AuthenticationButton = () => {
  return (
    <Space>
      <Link to="/signin">
        <Button>Sign in</Button>
      </Link>
      <Link to="/signup">
        <Button>Sign up</Button>
      </Link>
    </Space>
  );
};

export default AuthenticationButton;
