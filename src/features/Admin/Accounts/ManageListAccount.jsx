import React, { useEffect, useState } from 'react';
import { Button, Layout, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UserDeleteOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';

import { disableUserAction, getListAccountAction } from '../../../redux/slice/userSlice';
import TableAdmin from '../../../components/Container/TableAdmin/TableAdmin';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import ModalDisableAccount from '../../../components/Container/ModalContainer/ModalDisableAccount';
import { PAGINATION } from '../../../constants';

const ManageListAccount = () => {
  //state of modal
  const [open, setOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  //get list accounts from store
  const listAccounts = useSelector((state) => state.user.listAccounts);
  const pagination = useSelector((state) => state.course.pagination);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getListAccountAction({
        pageIndex: pageIndex,
        pageSize: PAGINATION.PAGE_SIZE,
      })
    );
    return () => {};
  }, [dispatch, pageIndex]);

  const handleDisableUser = (id) => {
    dispatch(disableUserAction({ id }));
    setOpen(false);
  };

  const showModal = (record) => {
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
          pagination={pagination}
          setPageIndex={setPageIndex}
          actions={(record) => (
            <>
              <Button
                onClick={() => {
                  showModal(record);
                }}
                icon={<UserDeleteOutlined />}
              />
            </>
          )}
        />
        {open && (
          <Modal
            open={open}
            title="Disable User"
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button
                className="bg-black"
                key="submit"
                type="primary"
                onClick={() => {
                  handleDisableUser();
                }}
              >
                Delete this user
              </Button>,
            ]}
          >
            <ModalDisableAccount />
          </Modal>
        )}
      </Content>
    </Layout>
  );
};

export default ManageListAccount;
