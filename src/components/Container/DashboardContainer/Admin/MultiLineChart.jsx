import React from 'react';
import { Line } from 'react-chartjs-2';
import { DollarOutlined } from '@ant-design/icons';
const MultiLineChart = () => {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="col-span-12 rounded-xl border border-black bg-gray-100/50 px-5 pt-7.5 pb-5 shadow-2xl sm:px-7.5 xl:col-span-8 p-5">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex justify-between w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <DollarOutlined className=" mt-1 mr-2 text-xl" />
            <div className="w-full">
              <p className="font-semibold text-primary">Total Revenue</p>
              <p className="text-sm font-medium">12.04.2022 - 12.11.2023</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <DollarOutlined className="mt-1 mr-2 text-xl" />
            <div className="w-full">
              <p className="font-semibold text-secondary">Total Sales</p>
              <p className="text-sm font-medium">12.04.2022 - 12.11.2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Line data={data} />
      </div>
    </div>
  );
};

export default MultiLineChart;
