import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Avatar, Badge, Button, DatePicker, Form, Input, Select, Modal, Divider, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { EditTwoTone } from '@ant-design/icons';

import ChangePassword from './ChangePassword';
import BreadCrumbCustom from '../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { PROFILE_FORM_FIELDS } from '../../constants';

const EditProfile = () => {
  const [isModalChangePasswordOpen, setIsModalChangePasswordOpen] = useState(false);

  const currentUser = useSelector((state) => state.authentication.currentUser);

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(currentUser);
  }, [currentUser]);

  const handleEditProfile = (values) => {
    console.log('form', values);
  };
  const showModalChangePassword = () => {
    setIsModalChangePasswordOpen(true);
  };
  const handleOk = () => {
    setIsModalChangePasswordOpen(false);
  };
  const handleCancel = () => {
    setIsModalChangePasswordOpen(false);
  };
  return (
    <div className="bg-slate-100">
      <div className="pt-6 ml-44">
        <BreadCrumbCustom />
        <h1 className="text-2xl font-semibold mt-2">Edit Your Profile</h1>
      </div>
      <div>
        <Form
          form={form}
          onFinish={handleEditProfile}
          className="bg-white border shadow-2xl rounded-3xl my-6 mx-44 flex flex-1"
        >
          <div className="flex flex-1 flex-col py-5 pl-14 pr-7">
            <Form.Item className="text-center py-6 ">
              <Badge
                color="#faad14"
                count={<EditTwoTone className="cursor-pointer" />}
                style={{ borderRadius: '100%', fontSize: '1.5rem' }}
                offset={[-10, 130]}
              >
                <Avatar shape="circle" size={150} alt="avatar" src="https://www.astonvet.com/images/blog/fat-dog.jpg" />
              </Badge>
            </Form.Item>
            <Divider />

            <Form.Item label="Full Name" name={PROFILE_FORM_FIELDS.FULL_NAME} className="flex-1 mr-2">
              <Input />
            </Form.Item>

            <div className="flex">
              <Form.Item label="Password" name={PROFILE_FORM_FIELDS.PASSWORD} className="flex-1 mr-2">
                <Input.Password disabled />
              </Form.Item>
              <Button onClick={showModalChangePassword}>Change Password</Button>
              <Modal
                destroyOnClose={true}
                footer={[
                  <Button form="myForm" key="cancel-button" onClick={handleCancel}>
                    Cancel
                  </Button>,
                  <Button form="myForm" key="submit" htmlType="submit">
                    Submit
                  </Button>,
                  //
                ]}
                title="Change Password"
                open={isModalChangePasswordOpen}
                onCancel={handleCancel}
              >
                <ChangePassword handleOk={handleOk} />
              </Modal>
            </div>
            <Form.Item
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
              ]}
              label="Email"
              name={PROFILE_FORM_FIELDS.EMAIL}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Phone Number" name={PROFILE_FORM_FIELDS.PHONE_NUMBER}>
              <Input />
            </Form.Item>
            <Form.Item label="Address" name={PROFILE_FORM_FIELDS.ADDRESS}>
              <Input />
            </Form.Item>
            <Form.Item label="Nation" name={PROFILE_FORM_FIELDS.NATION}>
              <Input />
            </Form.Item>
          </div>
          <div className="flex flex-1 flex-col py-8 pl-7 pr-14">
            <Form.Item label="Gender" name={PROFILE_FORM_FIELDS.GENDER}>
              <Select>
                <Select.Option value="male">male</Select.Option>
                <Select.Option value="female">female</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Date Of Birth" name={PROFILE_FORM_FIELDS.DOB}>
              <DatePicker className="flex flex-1" />
            </Form.Item>
            <Form.Item label="Facebook" name={PROFILE_FORM_FIELDS.FACEBOOK}>
              <Input />
            </Form.Item>
            <Form.Item label="Instagram" name={PROFILE_FORM_FIELDS.INSTAGRAM}>
              <Input />
            </Form.Item>
            <Form.Item label="Bio" name={PROFILE_FORM_FIELDS.BIO}>
              <TextArea rows={4} />
            </Form.Item>

            <Space direction="vertical">
              <div className="flex flex-col gap-2">
                <h1>Payment method</h1>
                <Button className="w-min">Add Payment Method</Button>
              </div>
              <Space className="flex">{/* <CreditCard /> */}</Space>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="bg-amber-400 w-full">
                  Submit
                </Button>
              </Form.Item>
            </Space>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;
