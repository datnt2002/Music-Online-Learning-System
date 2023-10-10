import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';

const RequirementContainer = () => {
  return (
    <div className="my-6">
      <h2 className="text-xl mb-4 font-medium">Requirements</h2>
      <ul>
        <li>
          <CheckCircleOutlined className="align-[0.125rem] mr-4" />
          Có tư duy lập trình
        </li>
        <li>
          <CheckCircleOutlined className="align-[0.125rem] mr-4" />
          Có tư duy lập trình
        </li>
        <li>
          <CheckCircleOutlined className="align-[0.125rem] mr-4" />
          Có tư duy lập trình
        </li>
      </ul>
    </div>
  );
};

export default RequirementContainer;
