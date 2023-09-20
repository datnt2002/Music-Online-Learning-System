import React, { useEffect, useState } from 'react';
import { Button, Layout, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UserDeleteOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';

import { disableUserAction, getListAccountAction } from '../../redux/slice/userSlice';
import TableAdmin from '../../components/Container/TableAdmin/TableAdmin';
import getTokenFromStorage from '../../utils/getTokenFromStorage';
import BreadCrumbCustom from '../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import ModalDisableAccount from '../../components/Container/ModalContainer/ModalDisableAccount';

const ManageListAccount = () => {
  //state of modal
  const [open, setOpen] = useState(false);
  const [dataOfRecord, setDataOfRecord] = useState();

  const dispatch = useDispatch();
  //get list accounts from store
  const listAccounts = useSelector((state) => state.user.listAccounts);

  const { accessToken } = getTokenFromStorage();

  useEffect(() => {
    dispatch(
      getListAccountAction({
        pageIndex: 1,
        pageSize: 4,
        accessToken: accessToken,
      })
    );
    return () => {};
  }, [dispatch, accessToken]);

  const handleDisableUser = (id) => {
    dispatch(disableUserAction({ id, accessToken: accessToken }));
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
      <div className="my-5 ml-6">
        <BreadCrumbCustom />
      </div>
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
                {dataOfRecord && <ModalDisableAccount data={dataOfRecord} />}
              </Modal>
            </>
          )}
        />
      </Content>
    </Layout>
  );
};

export default ManageListAccount;
