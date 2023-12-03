import React from 'react';
import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { Skeleton } from 'antd';

import { COLOR } from '../../../../constants';

const NumberOfCourseInCateChart = () => {
  const noOfCourseInCate = useSelector((state) => state.dashboard.NoOfCourseInCate);
  const loading = useSelector((state) => state.dashboard.loading);

  const data = {
    labels: noOfCourseInCate.map((data) => data?.cateName),
    datasets: [
      {
        label: 'Number Of Courses',
        data: noOfCourseInCate.map((data) => data?.courseCount),
        backgroundColor: COLOR.map((color) => color),
      },
    ],
  };

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="col-span-12 border border-black rounded-xl bg-gray-100/50 shadow-2xl px-5 pt-7.5 pb-5 sm:px-7.5 xl:col-span-4">
          <h5 className="text-xl font-semibold text-black mt-6 mb-5">Number Of Course In Category</h5>

          <div className="mb-2">
            <div className="mx-auto flex justify-center">
              <Doughnut data={data} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NumberOfCourseInCateChart;
