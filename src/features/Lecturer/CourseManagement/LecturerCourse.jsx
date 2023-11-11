import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Content } from 'antd/es/layout/layout';
import { Button, Modal, Space } from 'antd';
import { EditOutlined, UploadOutlined, DeleteOutlined } from '@ant-design/icons';

import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import TableAdmin from '../../../components/Container/TableAdmin/TableAdmin';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import { PAGINATION } from '../../../constants';
import {
  getDetailDraftCourseAction,
  getListDraftCourseAction,
  publishDraftCourseAction,
} from '../../../redux/slice/courseSlice';
import ModalCourseDetail from '../../../components/Container/ModalContainer/ModalCourseDetail';

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

  const handleEditDraftCourse = (record) => {
    console.log(record);
    dispatch(
      getDetailDraftCourseAction({
        courseId: record?.courseId,
      })
    );
    setOpen(true);
  };
  const handlePublishCourse = (record) => {
    console.log(record);
    dispatch(
      publishDraftCourseAction({
        courseId: record?.courseId,
      })
    );
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
                handleEditDraftCourse(record);
              }}
              icon={<EditOutlined />}
            />
            <Button
              onClick={() => {
                handlePublishCourse(record);
              }}
              icon={<UploadOutlined />}
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
        >
          <ModalCourseDetail />
        </Modal>
      )}
    </Content>
  );
};

export default LecturerCourse;
