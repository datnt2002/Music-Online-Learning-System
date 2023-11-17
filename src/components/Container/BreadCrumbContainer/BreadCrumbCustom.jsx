import React from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';

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
      title: 'Home',
    },
    ...pathNameArray.map((item) => {
      return { title: capitalize(item) };
    }),
  ];
  return <Breadcrumb items={items} />;
};

export default BreadCrumbCustom;
