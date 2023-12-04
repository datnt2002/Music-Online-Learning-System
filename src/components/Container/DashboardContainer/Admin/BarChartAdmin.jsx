import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import { COLOR, MONTH } from '../../../../constants';

const BarChartAdmin = () => {
  const usersByMonth = useSelector((state) => state.dashboard.userByMonth);
  const loading = useSelector((state) => state.dashboard.loading);

  const monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const processedData = monthArr.map((month) => {
    const userData = usersByMonth.find((data) => data.month === month);
    return {
      totalUser: userData ? userData.totalUser : 0,
      month: month,
    };
  });
  console.log(processedData);

  const data = {
    labels: MONTH,
    datasets: [
      {
        label: 'New User Register',
        data: processedData.map((data) => data.totalUser),
        backgroundColor: COLOR,
      },
    ],
  };
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="col-span-12 rounded-xl border border-black bg-gray-100/50 px-5 pt-7.5 pb-5 shadow-2xl sm:px-7.5 xl:col-span-8 p-5">
          <h1 className="text-xl font-semibold text-black  mb-5">Number Of New Registers</h1>
          <Bar data={data} />
        </div>
      )}
    </>
  );
};

export default BarChartAdmin;
