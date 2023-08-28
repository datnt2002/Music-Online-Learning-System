import React, { useState } from 'react';
import { Breadcrumb, Button, Layout, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UserDeleteOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';

import { disableUserAction } from '../../redux/slice/userSlice';
import TableAdmin from '../../components/Container/TableAdmin/TableAdmin';

const ManageListAccount = () => {
  //state of modal
  const [open, setOpen] = useState(false);
  const [dataOfRecord, setDataOfRecord] = useState();

  const dispatch = useDispatch();
  //get list accounts from store
  const listAccounts = useSelector((state) => state.user.listAccounts);
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  console.log(token);

  const handleDisableUser = (id) => {
    console.log('gau gau ', id);
    dispatch(disableUserAction({ id, token }));
    setOpen(false);
  };

  const showModal = (record) => {
    setDataOfRecord(record);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

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
        <TableAdmin
          dataSource={listAccounts}
          actions={(record) => (
            <>
              <Button
                onClick={() => {
                  showModal(record);
                }}
                icon={<UserDeleteOutlined />}
              />
              <Modal
                open={open}
                title="Disable User"
                onCancel={handleCancel}
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Return
                  </Button>,
                  <Button
                    className="bg-amber-500"
                    key="submit"
                    type="primary"
                    onClick={() => {
                      handleDisableUser(dataOfRecord.id);
                    }}
                  >
                    Delete this user
                  </Button>,
                ]}
              >
                {dataOfRecord && <p>Are you sure to delete account ${dataOfRecord.id}</p>}
              </Modal>
            </>
          )}
        />
      </Content>
    </Layout>
  );
};

export default ManageListAccount;
