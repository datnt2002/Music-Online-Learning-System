import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Layout, Modal, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { EyeOutlined, CarryOutOutlined } from '@ant-design/icons';

import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import TableAdmin from '../../../components/Container/TableAdmin/TableAdmin';
import {
  approvedCoursePendingAction,
  getDetailPendingCourseAction,
  getListCoursePendingAction,
} from '../../../redux/slice/courseSlice';
import ModalCourseDetail from '../../../components/Container/ModalContainer/ModalCourseDetail';
import { useNavigate } from 'react-router-dom';

const CoursesPending = () => {
  const [open, setOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const listCourse = useSelector((state) => state.course.listCourse);
  const pagination = useSelector((state) => state.course.pagination);
  console.log(listCourse);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getListCoursePendingAction({
        pageIndex: pageIndex,
        pageSize: 10,
      })
    );
    return () => {};
  }, [dispatch, pageIndex]);

  const handleShowDetailCourse = (record) => {
    dispatch(
      getDetailPendingCourseAction({
        courseId: record.courseId,
      })
    );
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAcceptCourse = async (record) => {
    await dispatch(
      approvedCoursePendingAction({
        courseId: record.courseId,
        navigate,
      })
    );

    dispatch(
      getListCoursePendingAction({
        pageIndex: pageIndex,
        pageSize: 10,
      })
    );
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
        className="h-screen"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <TableAdmin
          dataSource={listCourse}
          pagination={pagination}
          setPageIndex={setPageIndex}
          actions={(record) => (
            <Space>
              <Button
                onClick={() => {
                  handleShowDetailCourse(record);
                }}
                icon={<EyeOutlined />}
              />

              <Button
                onClick={() => {
                  handleAcceptCourse(record);
                }}
                icon={<CarryOutOutlined />}
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
    </Layout>
  );
};

export default CoursesPending;
