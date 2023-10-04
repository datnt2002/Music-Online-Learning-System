import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Layout, Modal, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { EyeOutlined, CarryOutOutlined } from '@ant-design/icons';

import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import TableAdmin from '../../../components/Container/TableAdmin/TableAdmin';
import { approvedCoursePendingAction, getListCoursePendingAction } from '../../../redux/slice/courseSlice';
import ModalCourseDetail from '../../../components/Container/ModalContainer/ModalCourseDetail';
import { useNavigate } from 'react-router-dom';

const CoursesPending = () => {
  const [open, setOpen] = useState(false);
  const [dataOfRecord, setDataOfRecord] = useState();
  const listCourse = useSelector((state) => state.course.listCourse);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getListCoursePendingAction({
        pageIndex: 1,
        pageSize: 10,
      })
    );
    return () => {};
  }, [dispatch]);

  const handleShowDetailCourse = (record) => {
    console.log(record);
    setDataOfRecord(record);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAcceptCourse = (record) => {
    console.log(record);
    dispatch(
      approvedCoursePendingAction({
        courseId: record.courseId,
        navigate,
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
          actions={(record) => (
            <Space>
              <Button
                onClick={() => {
                  handleShowDetailCourse(record);
                }}
                icon={<EyeOutlined />}
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
                  {dataOfRecord && <ModalCourseDetail data={dataOfRecord} />}
                </Modal>
              )}
              <Button
                onClick={() => {
                  handleAcceptCourse(record);
                }}
                icon={<CarryOutOutlined />}
              />
            </Space>
          )}
        />
      </Content>
    </Layout>
  );
};

export default CoursesPending;
