import React, { useEffect, useState } from 'react';
import { Button, Layout, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UserSwitchOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';

import TableAdmin from '../../../components/Container/TableAdmin/TableAdmin';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { PAGINATION } from '../../../constants';
import {
  approvedRequestRoleAction,
  getListRoleRequestAction,
  rejectRequestRoleAction,
} from '../../../redux/slice/userSlice';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';

const LecturerRequests = () => {
  const [pageIndex, setPageIndex] = useState(1);
  //get list accounts from store
  const listRequests = useSelector((state) => state.user.listRequests);
  // useSelector((state) => state.user.listAccounts);
  const pagination = useSelector((state) => state.user.pagination);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getListRoleRequestAction({
        pageIndex: pageIndex,
        pageSize: PAGINATION.PAGE_SIZE,
      })
    );
    return () => {};
  }, [dispatch, pageIndex]);

  const handleAcceptRequest = (record) => {
    dispatch(
      approvedRequestRoleAction({
        requestId: record?.id,
      })
    );
  };

  const handleRejectRequest = (record) => {
    dispatch(
      rejectRequestRoleAction({
        requestId: record?.id,
      })
    );
  };

  return (
    <Layout style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto', padding: '0 24px 24px' }}>
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
              <Popconfirm
                title="Approve the request"
                description="Are you sure to approve this request?"
                onConfirm={() => handleAcceptRequest(record)}
                onCancel={() => handleRejectRequest(record)}
                okText="Accept"
                cancelText="Reject"
                okButtonProps={{ style: { backgroundColor: 'black', color: 'white' } }}
              >
                <Button icon={<UserSwitchOutlined />} />
              </Popconfirm>
            </>
          )}
        />
      </Content>
    </Layout>
  );
};

export default LecturerRequests;
