import { Form, Input } from 'antd';
import React from 'react';
import { FORM_FIELDS } from '../../../constants/formfield';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getListSearchCourseAction } from '../../../redux/slice/courseSlice';
import { PUBLIC_ROUTE } from '../../../constants';

const Searchbox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = (values) => {
    console.log('Success:', values);
    dispatch(
      getListSearchCourseAction({
        keyword: values?.search,
      })
    );
    navigate(PUBLIC_ROUTE.SEARCH + `/${values?.search}`);
  };
  return (
    <Form onFinish={handleSearch} className="w-full mr-5">
      <Form.Item name={FORM_FIELDS.SEARCH}>
        <Input prefix={<SearchOutlined />} className="rounded-full top-4 border-black" />
      </Form.Item>
    </Form>
  );
};

export default Searchbox;
