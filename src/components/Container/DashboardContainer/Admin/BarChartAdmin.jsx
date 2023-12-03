import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import { COLOR } from '../../../../constants';

const BarChartAdmin = () => {
  const loading = useSelector((state) => state.dashboard.loading);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="col-span-12 rounded-xl border border-black bg-gray-100/50 px-5 pt-7.5 pb-5 shadow-2xl sm:px-7.5 xl:col-span-8 p-5">
          <div className="">{/* <Bar data={data} /> */}</div>
        </div>
      )}
    </>
  );
};

export default BarChartAdmin;
