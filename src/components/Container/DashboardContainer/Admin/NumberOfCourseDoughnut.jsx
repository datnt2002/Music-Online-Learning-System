import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { COLOR } from '../../../../constants';

const NumberOfCourseDoughnut = () => {
  const data = {
    labels: ['Draft Course', 'Pending Course', 'Approved Course', 'Deleted Course'],
    datasets: [
      {
        label: 'Number Of Courses',
        data: [300, 50, 500, 100],
        backgroundColor: COLOR.map((color) => color),
      },
    ],
  };

  return (
    <div className="col-span-12 border border-black rounded-xl bg-gray-100/50 shadow-2xl px-5 pt-7.5 pb-5 sm:px-7.5 xl:col-span-4">
      <h5 className="text-xl font-semibold text-black mt-6 mb-5">Number Of Courses</h5>

      <div className="mb-2">
        <div className="mx-auto flex justify-center">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default NumberOfCourseDoughnut;
