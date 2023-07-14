import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const AuthenticationButton = () => {
  return (
    <>
      <Link to="/signin">
        <Button>Sign in</Button>
      </Link>
      <Link to="/signup">
        <Button>Sign up</Button>
      </Link>
    </>
  );
};

export default AuthenticationButton;
