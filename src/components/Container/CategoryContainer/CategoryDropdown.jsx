import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { getListCategoryAction } from '../../../redux/slice/courseSlice';
import { Categories } from '../../../constants/mockData';
import { PAGINATION } from '../../../constants';

const CategoryDropdown = () => {
  const categories = useSelector((state) => state.course.listCategory);
  const items = categories.map((category) => {
    return {
      key: category.cateId,
      label: category.cateName,
      children: Categories.filter((subCate) => {
        return subCate.cateId === category.cateId;
      }).map((subCate) => {
        return {
          key: subCate.subCateId,
          label: subCate.subCateName,
        };
      }),
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getListCategoryAction({
        pageSize: PAGINATION.PAGE_SIZE,
      })
    );
  }, [dispatch]);

  const handleChooseCategory = ({ key }) => {
    console.log(`Click on item ${key}`);
  };
  return (
    <Dropdown
      menu={{
        items,
        onClick: handleChooseCategory,
      }}
      className="cursor-pointer"
    >
      <Space>
        Category
        <DownOutlined className="align-[0.05rem]" />
      </Space>
    </Dropdown>
  );
};

export default CategoryDropdown;
