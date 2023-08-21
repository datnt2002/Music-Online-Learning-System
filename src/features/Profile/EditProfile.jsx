import React, { useState } from 'react';
import avatarImage from '../../assets/imgs/ngol.jpg';
import { Avatar, Badge, Button, Card, DatePicker, Form, Input, Select, Modal } from 'antd';
import { EditTwoTone } from '@ant-design/icons';
import { PROFILE_FORM_FIELDS } from '../../constants';
import ChangePassword from './ChangePassword';
const EditProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onFinish = (values) => {
    console.log('form', values);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="bg-amber-100 ">
        <div>
          {/* <Breadcrumb
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
          /> */}
        </div>

        <div className="">
          <Form onFinish={onFinish} className="bg-white rounded-3xl m-6 flex flex-1">
            <div className="flex flex-1 flex-col p-5">
              <Form.Item className="text-center py-6">
                <Badge
                  color="#faad14"
                  count={<EditTwoTone />}
                  style={{ borderRadius: '100%', fontSize: '1.5rem' }}
                  offset={[-10, 130]}
                >
                  <Avatar shape="circle" size={150} src={avatarImage} />
                </Badge>
              </Form.Item>

              <div className="flex">
                <Form.Item label="First Name" name={PROFILE_FORM_FIELDS.FIRST_NAME} className="flex-1 mr-2">
                  <Input />
                </Form.Item>
                <Form.Item label="Last Name" name={PROFILE_FORM_FIELDS.LAST_NAME} className="flex-1">
                  <Input />
                </Form.Item>
              </div>
              <div className="flex">
                <Form.Item label="Password" name={PROFILE_FORM_FIELDS.PASSWORD} className="flex-1 mr-2">
                  <Input.Password placeholder="Input password" />
                </Form.Item>
                <Button onClick={showModal}>Change Password</Button>
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
                  open={isModalOpen}
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
            <div className="flex flex-1 flex-col p-5">
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
              <Form.Item label="Bio" name={PROFILE_FORM_FIELDS.BIO}>
                <Input />
              </Form.Item>
              <div>
                <h1>
                  Payment method
                  <span>
                    <Button>Add Payment Method</Button>
                  </span>
                </h1>
                <div className="flex">
                  <Card></Card>
                </div>
              </div>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
