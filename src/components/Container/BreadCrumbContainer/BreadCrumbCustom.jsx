import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import capitalize from '../../../utils/capitalize';
import { PUBLIC_ROUTE } from '../../../constants';

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
      title: <Link to={PUBLIC_ROUTE.DEFAULT}>Home</Link>,
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
