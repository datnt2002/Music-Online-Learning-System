import React from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { createNewCourseAction } from '../../redux/slice/courseSlice';

const CreateCourse = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
  console.log(token);
  const onFinish = (values) => {
    console.log('form', values);

    dispatch(
      createNewCourseAction({
        courseName: values.CourseName,
        description: values.Description,
        price: values.Price,
        isFree: values.Price > 0 ? false : true,
        subCateId: values.Category,
        token,
      })
    );
  };

  return (
    <>
      <Form layout="horizontal" onFinish={onFinish}>
        <Form.Item label="Course Name" name="CourseName">
          <Input />
        </Form.Item>
        <Form.Item label="Category" name="Category">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Price" name="Price">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Description" name="Description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateCourse;
