import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import capitalize from '../../../utils/capitalize';

const BreadCrumbCustom = () => {
  //get url
  const location = useLocation();
  const { pathname } = location;
  //return breadcrumb items without "/"
  const pathNameArray = pathname.split('/').filter((item) => {
    return item;
  });

  const items = [
    {
      title: <Link to="/">Home</Link>,
    },
    ...pathNameArray.map((item, index) => {
      const routeTo = `/${pathNameArray.slice(0, index + 1).join('/')}`;
      //check the last item of breadcrumb
      const isLast = index === pathNameArray.length - 1;
      return isLast ? { title: capitalize(item) } : { title: <Link to={routeTo}>{capitalize(item)}</Link> };
    }),
  ];
  return <Breadcrumb items={items} />;
};

export default BreadCrumbCustom;
