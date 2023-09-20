import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Avatar, Badge, Button, DatePicker, Form, Input, Select, Modal, Divider, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { EditTwoTone } from '@ant-design/icons';

import ChangePassword from './ChangePassword';
import BreadCrumbCustom from '../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { CHANGE_PASSWORD_FORM_FIELDS, PROFILE_FORM_FIELDS, VALIDATE_MESSAGE } from '../../constants';
import ModalEditAvatar from '../../components/Container/ModalContainer/ModalEditAvatar';

const EditProfile = () => {
  const [isModalChangePasswordOpen, setIsModalChangePasswordOpen] = useState(false);
  const [isModalEditAvatarOpen, setIsModalEditAvatarOpen] = useState(false);
  const currentUser = useSelector((state) => state.authentication.currentUser);

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(currentUser);
  }, [currentUser, form]);

  const handleEditProfile = (values) => {
    console.log('form', values);
  };
  const showModalChangePassword = () => {
    setIsModalChangePasswordOpen(true);
  };
  const handleOkModalChangePassword = () => {
    setIsModalChangePasswordOpen(false);
  };
  const handleCancelModalChangePassword = () => {
    setIsModalChangePasswordOpen(false);
  };

  const showModalEditAvatar = () => {
    setIsModalEditAvatarOpen(true);
  };
  const handleOkModalEditAvatar = () => {
    setIsModalEditAvatarOpen(false);
  };
  const handleCancelModalEditAvatar = () => {
    setIsModalEditAvatarOpen(false);
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
                onClick={showModalEditAvatar}
              >
                <Avatar shape="circle" size={150} alt="avatar" src={currentUser.avatar} />
              </Badge>
            </Form.Item>
            <Divider />
            <Space className="flex">
              <Form.Item label={PROFILE_FORM_FIELDS.FIRST_NAME_LABEL} name={PROFILE_FORM_FIELDS.FIRST_NAME}>
                <Input />
              </Form.Item>
              <Form.Item label={PROFILE_FORM_FIELDS.LAST_NAME_LABEL} name={PROFILE_FORM_FIELDS.LAST_NAME}>
                <Input />
              </Form.Item>
            </Space>
            <div className="flex">
              <Form.Item
                label={PROFILE_FORM_FIELDS.PASSWORD_LABEL}
                name={PROFILE_FORM_FIELDS.PASSWORD}
                className="flex-1 mr-2"
              >
                <Input.Password disabled />
              </Form.Item>
              <Button onClick={showModalChangePassword}>Change Password</Button>
            </div>
            <Form.Item
              rules={[
                {
                  type: 'email',
                  message: VALIDATE_MESSAGE.EMAIL_NOT_VALID,
                },
              ]}
              label={PROFILE_FORM_FIELDS.EMAIL_LABEL}
              name={PROFILE_FORM_FIELDS.EMAIL}
            >
              <Input />
            </Form.Item>
            <Form.Item label={PROFILE_FORM_FIELDS.PHONE_NUMBER_LABEL} name={PROFILE_FORM_FIELDS.PHONE_NUMBER}>
              <Input />
            </Form.Item>
            <Form.Item label={PROFILE_FORM_FIELDS.ADDRESS_LABEL} name={PROFILE_FORM_FIELDS.ADDRESS}>
              <Input />
            </Form.Item>
            <Form.Item label={PROFILE_FORM_FIELDS.NATION_LABEL} name={PROFILE_FORM_FIELDS.NATION}>
              <Input />
            </Form.Item>
          </div>
          <div className="flex flex-1 flex-col py-8 pl-7 pr-14">
            <Form.Item label={PROFILE_FORM_FIELDS.GENDER_LABEL} name={PROFILE_FORM_FIELDS.GENDER}>
              <Select>
                <Select.Option value="male">male</Select.Option>
                <Select.Option value="female">female</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label={PROFILE_FORM_FIELDS.DOB_LABEL} name={PROFILE_FORM_FIELDS.DOB}>
              <DatePicker className="flex flex-1" />
            </Form.Item>
            <Form.Item label={PROFILE_FORM_FIELDS.FACEBOOK_LABEL} name={PROFILE_FORM_FIELDS.FACEBOOK}>
              <Input />
            </Form.Item>
            <Form.Item label={PROFILE_FORM_FIELDS.INSTAGRAM_LABEL} name={PROFILE_FORM_FIELDS.INSTAGRAM}>
              <Input />
            </Form.Item>
            <Form.Item label={PROFILE_FORM_FIELDS.BIO_LABEL} name={PROFILE_FORM_FIELDS.BIO}>
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="bg-amber-400 w-full">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>

        {/* modal change password */}
        <Modal
          destroyOnClose={true}
          footer={[
            <Button
              form={CHANGE_PASSWORD_FORM_FIELDS.FORM_ID}
              key="cancel-button"
              onClick={handleCancelModalChangePassword}
            >
              Cancel
            </Button>,
            <Button form={CHANGE_PASSWORD_FORM_FIELDS.FORM_ID} key="submit" htmlType="submit">
              Submit
            </Button>,
            //
          ]}
          title={CHANGE_PASSWORD_FORM_FIELDS.FORM_TITLE}
          open={isModalChangePasswordOpen}
          onCancel={handleCancelModalChangePassword}
        >
          <ChangePassword handleOk={handleOkModalChangePassword} />
        </Modal>

        {/* modal edit avatar */}
        <Modal
          className="text-center"
          destroyOnClose={true}
          title="Upload Avatar"
          open={isModalEditAvatarOpen}
          onCancel={handleCancelModalEditAvatar}
          footer={null}
        >
          <ModalEditAvatar handleOk={handleOkModalEditAvatar} />
        </Modal>
      </div>
    </div>
  );
};

export default EditProfile;
