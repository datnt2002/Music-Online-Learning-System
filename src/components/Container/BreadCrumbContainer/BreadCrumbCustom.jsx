import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadCrumbCustom = () => {
  return (
    <Breadcrumb
      items={[
        {
          title: <Link to="/">Home</Link>,
        },
        {
          title: <Link to="/">Application Center</Link>,
        },
        {
          title: <Link>Application List</Link>,
        },
        {
          title: 'An Application',
        },
      ]}
    />
  );
};

export default BreadCrumbCustom;
