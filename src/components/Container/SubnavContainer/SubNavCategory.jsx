import React from 'react';
import { Categories } from '../../../constants/mockData';

const SubNavCategory = () => {
  return (
    <div className="flex h-full content-center flex-wrap">
      {Categories.length > 0 ? (
        Categories.map((category, index) => {
          return (
            <p className="flex-1 text-center" key={index}>
              {category.title}
            </p>
          );
        })
      ) : (
        <div>áa</div>
      )}
    </div>
  );
};

export default SubNavCategory;
