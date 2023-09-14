import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import BreadCrumbCustom from '../../components/Container/BreadCrumbContainer/BreadCrumbCustom';

import ExpandedTable from '../../components/Container/TableAdmin/ExpandedTable';
import { getListCourseAction } from '../../redux/slice/courseSlice';

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
  return (
    <Layout
      style={{
        padding: '0 24px 24px',
      }}
    >
      <Content
        className="h-screen"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <BreadCrumbCustom />
        <ExpandedTable dataSource={listCourse} />
      </Content>
    </Layout>
  );
};

export default ManageListCourses;
