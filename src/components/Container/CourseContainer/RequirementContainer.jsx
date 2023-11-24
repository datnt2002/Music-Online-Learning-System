import React, { useEffect, useState } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const RequirementContainer = () => {
  const currentCourse = useSelector((state) => state.course.currentCourse);
  const [listRequirement, setListRequirement] = useState([]);

  useEffect(() => {
    const requirement = currentCourse?.course?.requirement;
    let requirementArr = [];
    if (requirement) {
      requirementArr = requirement.split(',');
    }
    setListRequirement(requirementArr);
  }, [currentCourse]);
  return (
    <div className="my-6">
      <h2 className="text-xl mb-4 font-medium">Requirements</h2>
      <ul>
        {listRequirement.map((requirement, index) => {
          return (
            <li key={index}>
              <CheckCircleOutlined className="align-[0.125rem] mr-4" />
              {requirement}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RequirementContainer;
