import React from 'react';
import { Breadcrumb, Button, Form, Input, InputNumber, Popover, Select, Space, Steps } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { createNewCourseAction } from '../../redux/slice/courseSlice';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
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

  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );
  const description = 'You can hover on the dot.';

  return (
    <div className="p-6">
      <div>
        <Steps
          current={1}
          progressDot={customDot}
          items={[
            {
              title: 'Finished',
              description,
            },
            {
              title: 'In Progress',
              description,
            },
            {
              title: 'Waiting',
              description,
            },
            {
              title: 'Waiting',
              description,
            },
          ]}
        />
      </div>
      <div>
        <Breadcrumb
          items={[
            {
              title: 'Home',
            },
            {
              title: <a href="">Application Center</a>,
            },
            {
              title: <a href="">Application List</a>,
            },
            {
              title: 'An Application',
            },
          ]}
        ></Breadcrumb>
      </div>
      <div className="bg-yellow-100">
        <div>
          <h1>Create New Course</h1>
        </div>
        <Form layout="horizontal" onFinish={onFinish}>
          <Form.Item label="Course Name" name="CourseName">
            <Input />
          </Form.Item>
          <Form.Item label="Category" name="Category">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Sub Category" name="Category">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Brief Description" name="CourseName">
            <Input />
          </Form.Item>
          <Form.Item label="Price" name="Price">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Description" name="Description">
            <TextArea rows={4} />
          </Form.Item>

          <Form.List name="users">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <Form.Item {...restField} name={[name, 'first']} rules={[{ required: true }]}>
                      <Input placeholder="What you will learn" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.List name="requirements">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <Form.Item {...restField} name={[name, 'first']} rules={[{ required: true }]}>
                      <Input placeholder="Requirement" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateCourse;
