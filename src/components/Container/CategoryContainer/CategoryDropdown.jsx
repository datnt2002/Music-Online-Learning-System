import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { getListCategoryAction } from '../../../redux/slice/courseSlice';

const CategoryDropdown = () => {
  const categories = useSelector((state) => state.course.listCategory);
  const items = categories.map((category) => {
    return {
      key: category.cateId,
      label: category.cateName,
      children: [],
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getListCategoryAction({
        pageSize: 10,
      })
    );
  }, [dispatch]);
  return (
    <Dropdown
      menu={{
        items,
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
