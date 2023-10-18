import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Layout, Modal, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { EyeOutlined, RetweetOutlined } from '@ant-design/icons';

import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import TableAdmin from '../../../components/Container/TableAdmin/TableAdmin';
import {
  getDetailCourseAction,
  getListDeletedCourseAction,
  restoreDeletedCourseAction,
} from '../../../redux/slice/courseSlice';
import ModalCourseDetail from '../../../components/Container/ModalContainer/ModalCourseDetail';
import { PAGINATION } from '../../../constants';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';

const CoursesDeleting = () => {
  const [open, setOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const listCourse = useSelector((state) => state.course.listCourse);
  const pagination = useSelector((state) => state.course.pagination);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getListDeletedCourseAction({
        pageIndex: pageIndex,
        pageSize: PAGINATION.PAGE_SIZE,
      })
    );
    return () => {};
  }, [dispatch, pageIndex]);

  const handleShowDetailCourse = (record) => {
    dispatch(
      getDetailCourseAction({
        courseId: record.courseId,
      })
    );
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleRestoreCourse = (record) => {
    dispatch(
      restoreDeletedCourseAction({
        courseId: record.courseId,
      })
    );
  };
  return (
    <Layout style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto', padding: '0 24px 24px' }}>
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
                  handleRestoreCourse(record);
                }}
                icon={<RetweetOutlined />}
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

export default CoursesDeleting;
