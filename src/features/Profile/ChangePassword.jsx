import React from 'react';
import { Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { CHANGE_PASSWORD_FORM_FIELDS } from '../../constants';
import { changePasswordAction } from '../../redux/slice/authenticationSlice';

const ChangePassword = ({ handleOk }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  console.log(token);
  const onFinish = (values) => {
    console.log('form', values);
    dispatch(
      changePasswordAction({
        oldPassword: values.old_password,
        newPassword: values.new_password,
        token,
      })
    );
    handleOk();
  };
  return (
    <Form id="myForm" onFinish={onFinish}>
      <Form.Item label="Old Password" name={CHANGE_PASSWORD_FORM_FIELDS.OLD_PASSWORD}>
        <Input.Password />
      </Form.Item>
      <Form.Item label="New Password" name={CHANGE_PASSWORD_FORM_FIELDS.NEW_PASSWORD}>
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name={CHANGE_PASSWORD_FORM_FIELDS.CONFIRM_PASSWORD}
        dependencies={[CHANGE_PASSWORD_FORM_FIELDS.NEW_PASSWORD]}
        hasFeedback
        rules={[
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue(CHANGE_PASSWORD_FORM_FIELDS.NEW_PASSWORD) === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>
    </Form>
  );
};

export default ChangePassword;
