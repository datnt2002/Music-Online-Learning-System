import React, { useEffect, useState } from 'react';
import { Button, Layout, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UserSwitchOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';

import TableAdmin from '../../../components/Container/TableAdmin/TableAdmin';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { PAGINATION } from '../../../constants';
import { approvedRequestRoleAction, getListRoleRequestAction } from '../../../redux/slice/userSlice';

const LecturerRequests = () => {
  //state of modal
  const [open, setOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const [dataOfRecord, setDataOfRecord] = useState();
  //get list accounts from store
  const listRequests = useSelector((state) => state.user.listRequests);
  // useSelector((state) => state.user.listAccounts);
  const pagination = useSelector((state) => state.user.pagination);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getListRoleRequestAction({
        pageIndex: pageIndex,
        pageSize: 1,
      })
    );
    return () => {};
  }, [dispatch, pageIndex]);
  const showModal = (record) => {
    setDataOfRecord(record);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAcceptRequest = () => {
    dispatch(
      approvedRequestRoleAction({
        requestId: dataOfRecord.id,
      })
    );
    setOpen(false);
  };

  const handleRejectRequest = () => {};

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
          dataSource={listRequests}
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
              <Button key="reject" onClick={handleRejectRequest}>
                Reject
              </Button>,
              <Button className="bg-black" key="submit" type="primary" onClick={handleAcceptRequest}>
                Accept
              </Button>,
            ]}
          >
            <p>Accept request of user {dataOfRecord?.userId}</p>
          </Modal>
        )}
      </Content>
    </Layout>
  );
};

export default LecturerRequests;
