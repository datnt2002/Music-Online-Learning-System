import React, { useEffect } from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useDispatch, useSelector } from 'react-redux';
import { getListCourseAction } from '../../redux/slice/courseSlice';

import TableAdmin from '../../components/Container/TableAdmin';

const ManageListCourses = () => {
  const dispatch = useDispatch();
  const listCourse = useSelector((state) => state.course.listCourse);
  console.log(listCourse);

  useEffect(() => {
    dispatch(getListCourseAction());
  }, []);

  return (
    <Layout
      style={{
        padding: '0 24px 24px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
        items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
      ></Breadcrumb>
      <Content
        className="h-screen"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <TableAdmin dataSource={listCourse} />
      </Content>
    </Layout>
  );
};

export default ManageListCourses;
