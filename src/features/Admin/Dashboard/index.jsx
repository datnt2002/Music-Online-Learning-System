import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Content } from 'antd/es/layout/layout';
import { Layout } from 'antd';

import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import CategoryTotal from '../../../components/Container/DashboardContainer/Admin/CategoryTotal';
import MultiLineChart from '../../../components/Container/DashboardContainer/Admin/MultiLineChart';
import UserTotal from '../../../components/Container/DashboardContainer/Admin/UserTotal';
import {
  getCategoryByNumberOfCoursesAction,
  getCountApprovedCourseAction,
  getCountCategoriesAction,
  getCountUsersAction,
  getECoinPerMonthAction,
  getProfitAdminAction,
  getUserByMonthAction,
} from '../../../redux/slice/dashboardSlice';
import CoursesTotal from '../../../components/Container/DashboardContainer/Admin/CoursesTotal';
import ProfitTotal from '../../../components/Container/DashboardContainer/Admin/ProfitTotal';
import NumberOfCourseInCateChart from '../../../components/Container/DashboardContainer/Admin/NumberOfCourseInCateChart';
import BarChartAdmin from '../../../components/Container/DashboardContainer/Admin/BarChartAdmin';
import NumberOfCourseDoughnut from '../../../components/Container/DashboardContainer/Admin/NumberOfCourseDoughnut';

const DashBoardAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountUsersAction({}));
    dispatch(getCountCategoriesAction({}));
    dispatch(getCountApprovedCourseAction({}));
    dispatch(getProfitAdminAction({}));
    dispatch(getCategoryByNumberOfCoursesAction({}));
    dispatch(getUserByMonthAction({}));
    dispatch(getECoinPerMonthAction({}));
  }, []);

  return (
    <Layout style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto', padding: '0 24px 24px' }}>
      <div className="my-5 ml-6">
        <BreadCrumbCustom />
      </div>
      <Content
        className="min-h-screen "
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          <CategoryTotal />
          <UserTotal />
          <CoursesTotal />
          <ProfitTotal />
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 ">
          <NumberOfCourseInCateChart />
          <MultiLineChart />
          <BarChartAdmin />
          <NumberOfCourseDoughnut />
        </div>
      </Content>
    </Layout>
  );
};

export default DashBoardAdmin;
