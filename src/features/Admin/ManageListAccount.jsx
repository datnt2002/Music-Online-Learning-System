import React, { useEffect } from 'react';
import { Breadcrumb, Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { Content } from 'antd/es/layout/layout';
import TableAdmin from '../../components/Container/TableAdmin';
import { getListAccountAction } from '../../redux/slice/userSlice';
import { Courses } from '../../constants/mockData';

const ManageListAccount = () => {
  const dispatch = useDispatch();
  const listAccounts = useSelector((state) => state.user.listAccount);
  console.log(listAccounts);
  useEffect(() => {
    dispatch(getListAccountAction());
    return () => {};
  }, []);

  return (
    <Layout
      style={{
        padding: '0 24px 24px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
        items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
      ></Breadcrumb>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <TableAdmin dataSource={Courses} />
      </Content>
    </Layout>
  );
};

export default ManageListAccount;
