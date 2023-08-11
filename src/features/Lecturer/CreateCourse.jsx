import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { createNewCourseAction } from '../../redux/slice/courseSlice';

const { RangePicker } = DatePicker;
// const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

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
        {/* <Form.Item label="Radio" name="Radio">
        <Radio.Group>
          <Radio value="apple"> Apple </Radio>
          <Radio value="pear"> Pear </Radio>
        </Radio.Group>
      </Form.Item> */}
        <Form.Item label="Course Name" name="CourseName">
          <Input />
        </Form.Item>
        <Form.Item label="Category" name="Category">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        {/* <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
          ]}
        />
      </Form.Item> */}
        {/* <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="RangePicker">
        <RangePicker />
      </Form.Item> */}
        <Form.Item label="Price" name="Price">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Description" name="Description">
          <TextArea rows={4} />
        </Form.Item>
        {/* <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item> */}
        {/* <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item> */}
        {/* <Form.Item label="Slider">
        <Slider />
      </Form.Item> */}
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
