import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Avatar, Badge, Button, DatePicker, Form, Input, Select, Modal, Divider } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { EditTwoTone } from '@ant-design/icons';

import ChangePassword from './ChangePassword';
import BreadCrumbCustom from '../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { CHANGE_PASSWORD_FORM_FIELDS, PROFILE_FORM_FIELDS, VALIDATE_MESSAGE } from '../../constants';
import ModalEditAvatar from '../../components/Container/ModalContainer/ModalEditAvatar';
import defaultAvatar from '../../assets/imgs/defaultAvatar.webp';
import Loading from '../../components/Common/Loading';
import repeatBg from '../../assets/imgs/repeatbg.jpg';

const EditProfile = () => {
  const [isModalChangePasswordOpen, setIsModalChangePasswordOpen] = useState(false);
  const [isModalEditAvatarOpen, setIsModalEditAvatarOpen] = useState(false);
  const currentUser = useSelector((state) => state.authentication.currentUser);
  const loading = useSelector((state) => state.authentication.loading);
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
    <div style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}>
      {loading && <Loading />}
      <Divider className="bg-black mb-0 mt-3" />
      <div className="pt-6 ml-44">
        <BreadCrumbCustom />
        <h1 className="text-2xl font-semibold mt-2">Edit Your Profile</h1>
      </div>
      <div className="pb-4">
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
                <Avatar shape="circle" size={150} alt="avatar" src={currentUser.avatar || defaultAvatar} />
              </Badge>
            </Form.Item>
            <Divider />

            <Form.Item
              label={PROFILE_FORM_FIELDS.FIRST_NAME_LABEL}
              name={PROFILE_FORM_FIELDS.FIRST_NAME}
              rules={[
                {
                  required: true,
                  message: VALIDATE_MESSAGE.FIRST_NAME_REQUIRED,
                },
                {
                  min: 2,
                  message: VALIDATE_MESSAGE.FIRST_NAME_LENGTH,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={PROFILE_FORM_FIELDS.LAST_NAME_LABEL}
              name={PROFILE_FORM_FIELDS.LAST_NAME}
              rules={[
                {
                  required: true,
                  message: VALIDATE_MESSAGE.LAST_NAME_REQUIRED,
                },
                {
                  min: 2,
                  message: VALIDATE_MESSAGE.LAST_NAME_LENGTH,
                },
              ]}
            >
              <Input />
            </Form.Item>

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
                {
                  required: true,
                  message: VALIDATE_MESSAGE.EMAIL_REQUIRED,
                },
                {
                  min: 10,
                  message: VALIDATE_MESSAGE.EMAIL_LENGTH,
                },
              ]}
              label={PROFILE_FORM_FIELDS.EMAIL_LABEL}
              name={PROFILE_FORM_FIELDS.EMAIL}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={PROFILE_FORM_FIELDS.PHONE_NUMBER_LABEL}
              name={PROFILE_FORM_FIELDS.PHONE_NUMBER}
              rules={[
                {
                  required: true,
                  message: VALIDATE_MESSAGE.PHONE_NUMBER_REQUIRED,
                },
                {
                  min: 10,
                  message: VALIDATE_MESSAGE.PHONE_NUMBER_MIN_LENGTH,
                },
                {
                  max: 11,
                  message: VALIDATE_MESSAGE.PHONE_NUMBER_MAX_LENGTH,
                },
                {
                  pattern: new RegExp(/^[0-9]+$/),
                  message: VALIDATE_MESSAGE.PHONE_NUMBER_REGEX,
                },
              ]}
            >
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
                <Select.Option value={PROFILE_FORM_FIELDS.GENDER_MALE_VALUE}>
                  {PROFILE_FORM_FIELDS.GENDER_MALE}
                </Select.Option>
                <Select.Option value={PROFILE_FORM_FIELDS.GENDER_FEMALE_VALUE}>
                  {PROFILE_FORM_FIELDS.GENDER_FEMALE}
                </Select.Option>
                <Select.Option value={PROFILE_FORM_FIELDS.GENDER_OTHER_VALUE}>
                  {PROFILE_FORM_FIELDS.GENDER_OTHER}
                </Select.Option>
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
              <Button type="primary" htmlType="submit" className="bg-black w-full">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>

        {/* modal change password */}
        {isModalChangePasswordOpen && (
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
        )}

        {/* modal edit avatar */}
        {isModalEditAvatarOpen && (
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
        )}
      </div>
    </div>
  );
};

export default EditProfile;
