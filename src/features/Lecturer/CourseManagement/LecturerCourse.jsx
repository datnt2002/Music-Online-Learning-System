import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Content } from 'antd/es/layout/layout';
import { Button, Modal, Popconfirm, Space } from 'antd';
import { EyeOutlined, UploadOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import TableAdmin from '../../../components/Container/TableAdmin/TableAdmin';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import { LECTURER_ROUTE, PAGINATION } from '../../../constants';
import {
  deleteCourseFromAdminAction,
  getDetailDraftCourseAction,
  getListDraftCourseAction,
  publishDraftCourseAction,
} from '../../../redux/slice/courseSlice';
import ModalCourseDetail from '../../../components/Container/ModalContainer/ModalCourseDetail';
import { useNavigate } from 'react-router-dom';

const LecturerCourse = () => {
  const [open, setOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const listCourse = useSelector((state) => state.course.listCourse);
  const pagination = useSelector((state) => state.course.pagination);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getListDraftCourseAction({
        pageIndex: pageIndex,
        pageSize: PAGINATION.PAGE_SIZE,
      })
    );
    return () => {};
  }, [dispatch, pageIndex]);

  const handleViewDetailDraftCourse = (record) => {
    dispatch(
      getDetailDraftCourseAction({
        courseId: record?.courseId,
      })
    );
    setOpen(true);
  };

  const handleEditDraftCourse = (record) => {
    navigate(LECTURER_ROUTE.EDIT_COURSE + `/${record?.courseId}`);
  };

  const handlePublishCourse = (record) => {
    dispatch(
      publishDraftCourseAction({
        courseId: record?.courseId,
      })
    );
  };

  const handleDeleteCourse = (record) => {
    dispatch(
      deleteCourseFromAdminAction({
        courseId: record.courseId,
      })
    );
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const cancel = (e) => {};
  return (
    <Content
      className="min-h-screen p-6"
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
                handleViewDetailDraftCourse(record);
              }}
              icon={<EyeOutlined />}
            />
            <Button
              onClick={() => {
                handleEditDraftCourse(record);
              }}
              icon={<EditOutlined />}
            />
            <Popconfirm
              title="Publish this course"
              description="Are you sure to publish this course?"
              onConfirm={() => {
                handlePublishCourse(record);
              }}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
              okButtonProps={{ style: { backgroundColor: 'black', color: 'white' } }}
            >
              <Button icon={<UploadOutlined />} />
            </Popconfirm>

            <Popconfirm
              title="Delete this course"
              description="Are you sure to delete this course?"
              onConfirm={() => {
                handleDeleteCourse(record);
              }}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
              okButtonProps={{ style: { backgroundColor: 'black', color: 'white' } }}
            >
              <Button icon={<DeleteOutlined />} />
            </Popconfirm>
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
