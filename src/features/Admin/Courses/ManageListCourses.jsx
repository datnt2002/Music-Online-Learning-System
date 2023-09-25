import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Layout, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';

import TableAdmin from '../../../components/Container/TableAdmin/TableAdmin';
import { getListCourseAction } from '../../../redux/slice/courseSlice';

const ManageListCourses = () => {
  const listCourse = useSelector((state) => state.course.listCourse);
  const dispatch = useDispatch();
  console.log(listCourse);
  useEffect(() => {
    dispatch(
      getListCourseAction({
        pageIndex: 1,
        pageSize: 5,
      })
    );
    return () => {};
  }, [dispatch]);

  const handleShowDetailCourse = (record) => {
    console.log(record);
  };

  const handleDeleteCourse = (record) => {
    console.log(record);
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
              <Button
                onClick={() => {
                  handleDeleteCourse(record);
                }}
                icon={<DeleteOutlined />}
              />
            </Space>
          )}
        />
      </Content>
    </Layout>
  );
};

export default ManageListCourses;
