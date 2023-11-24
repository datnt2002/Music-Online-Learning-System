import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Form, Divider } from 'antd';
import TextArea from 'antd/es/input/TextArea';

import BreadCrumbCustom from '../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { LECTURER_REQUEST_FORM_FIELDS, VALIDATE_MESSAGE } from '../../constants';
import Loading from '../../components/Common/Loading';
import repeatBg from '../../assets/imgs/repeatbg.jpg';
import { useNavigate } from 'react-router-dom';
import { requestLecturerAction } from '../../redux/slice/authenticationSlice';

const RequestLecturerForm = () => {
  const loading = useSelector((state) => state.authentication.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitRequest = (values) => {
    console.log(values);
    dispatch(
      requestLecturerAction({
        introduction: values.introduction,
        navigate,
      })
    );
  };

  const formLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}>
      {loading && <Loading />}
      <Divider className="bg-black mb-0 mt-3" />
      <div className="pt-6 ml-44">
        <BreadCrumbCustom />
        <h1 className="text-2xl font-semibold mt-2">Lecturer Form Request</h1>
      </div>
      <div className="pb-4">
        <Form
          {...formLayout}
          onFinish={handleSubmitRequest}
          className="bg-white border shadow-2xl rounded-3xl my-6 mx-44 flex flex-1"
        >
          <div className="flex flex-1 flex-col py-8 pl-7 pr-14">
            <Form.Item
              label={LECTURER_REQUEST_FORM_FIELDS.INTRODUCTION_LABEL}
              name={LECTURER_REQUEST_FORM_FIELDS.INTRODUCTION}
              rules={[
                {
                  required: true,
                  message: VALIDATE_MESSAGE.REQUIRED,
                },
                {
                  min: 50,
                  message: VALIDATE_MESSAGE.INTRODUCTION_MIN,
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 18, offset: 6 }}>
              <Button type="primary" htmlType="submit" className="bg-black w-full">
                Send Request
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RequestLecturerForm;
