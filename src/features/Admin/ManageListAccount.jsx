import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import TableAdmin from '../../components/Container/TableAdmin';

const ManageListAccount = () => {
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
        <TableAdmin />
      </Content>
    </Layout>
  );
};

export default ManageListAccount;
