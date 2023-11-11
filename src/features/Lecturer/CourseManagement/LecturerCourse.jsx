import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Content } from 'antd/es/layout/layout';
import { Button, Modal, Space } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';

import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import TableAdmin from '../../../components/Container/TableAdmin/TableAdmin';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import { PAGINATION } from '../../../constants';
import { getDetailDraftCourseAction, getListDraftCourseAction } from '../../../redux/slice/courseSlice';

const LecturerCourse = () => {
  const [open, setOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const listCourse = useSelector((state) => state.course.listCourse);
  const pagination = useSelector((state) => state.course.pagination);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getListDraftCourseAction({
        pageIndex: pageIndex,
        pageSize: PAGINATION.PAGE_SIZE,
      })
    );
    return () => {};
  }, [dispatch, pageIndex]);

  const handleShowDetailDraftCourse = (record) => {
    console.log(record);
    dispatch(
      getDetailDraftCourseAction({
        courseId: record?.courseId,
      })
    );
    setOpen(true);
  };

  // const handleDeleteCourse = (record) => {
  //   dispatch(
  //     deleteCourseFromAdminAction({
  //       courseId: record.courseId,
  //     })
  //   );
  // };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Content
      className="h-screen p-6"
      style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto', padding: '0 24px 24px' }}
    >
      <div className="py-3">
        <BreadCrumbCustom />
      </div>
      <TableAdmin
        dataSource={listCourse}
        pagination={pagination}
        setPageIndex={setPageIndex}
        actions={(record) => (
          <Space>
            <Button
              onClick={() => {
                handleShowDetailDraftCourse(record);
              }}
              icon={<EyeOutlined />}
            />
            <Button
              onClick={() => {
                // handleDeleteCourse(record);
              }}
              icon={<DeleteOutlined />}
            />
          </Space>
        )}
      />
      {open && (
        <Modal
          width={850}
          open={open}
          title="Course Detail"
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
          ]}
        ></Modal>
      )}
    </Content>
  );
};

export default LecturerCourse;
