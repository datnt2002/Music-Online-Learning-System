import React, { useEffect, useState } from 'react';
import { Button, Layout, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UserSwitchOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';

import TableAdmin from '../../../components/Container/TableAdmin/TableAdmin';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { PAGINATION } from '../../../constants';

const LecturerRequests = () => {
  //state of modal
  const [open, setOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  //get list accounts from store
  const listAccounts = [];
  // useSelector((state) => state.user.listAccounts);
  const pagination = useSelector((state) => state.course.pagination);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {};
  }, [dispatch, pageIndex]);

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
                icon={<UserSwitchOutlined />}
              />
            </>
          )}
        />
        {open && (
          <Modal
            open={open}
            title="Accept Lecturer Request"
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button className="bg-black" key="submit" type="primary" onClick={() => {}}>
                Accept
              </Button>,
            ]}
          ></Modal>
        )}
      </Content>
    </Layout>
  );
};

export default LecturerRequests;
