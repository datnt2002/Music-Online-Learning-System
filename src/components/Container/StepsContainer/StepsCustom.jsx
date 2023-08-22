import { Steps } from 'antd';
import React from 'react';

const StepsCustom = () => {
  const description = 'You can hover on the dot.';

  return (
    <div className="bg-emerald-300 p-6 ">
      <Steps
        current={0}
        direction="vertical"
        items={[
          {
            title: 'Step 1 ',
            description,
          },
          {
            title: 'Step 2',
            description,
          },
          {
            title: 'Step 3',
            description,
          },
        ]}
      />
    </div>
  );
};

export default StepsCustom;
