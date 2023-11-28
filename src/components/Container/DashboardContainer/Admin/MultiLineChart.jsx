import React from 'react';
import { Line } from 'react-chartjs-2';
import { DollarOutlined } from '@ant-design/icons';
const MultiLineChart = () => {
  const data = {
    labels: ['1', '1', '1', '1', '1', '1', '1'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
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
