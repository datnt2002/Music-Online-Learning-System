import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';

const Payment = () => {
  const [url, setUrl] = useState('');

  const handlePayment = (values) => {
    console.log(values);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwidXNlcm5hbWUiOiJhZG1pbjAwMSIsImlhdCI6MTY5NDA1OTc0OCwiZXhwIjoxNjk0NjY0NTQ4fQ.Z9fxAPL4tPQEzIiL8jFs9WDJsqFilI7mmDM-cZy3Ey0'
    );

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(values),
      redirect: 'follow',
    };

    fetch('http://www.eschoolhub.click/api/createPayment', requestOptions)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        setUrl(result);
        console.log('reslut', result);
        //the value of resut: "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=10000000&vnp_BankCode=ncb&vnp_Command=pay&vnp_CreateDate=20230907113412&vnp_CurrCode=VND&vnp_IpAddr=%3A%3A1&vnp_Locale=vn&vnp_OrderInfo=Thanh+toan+cho+tai+khoan%3Aadmin001&vnp_OrderType=other&vnp_ReturnUrl=http%3A%2F%2Fwww.eschoolhub.click%2Fapi%2Fvnpay_return&vnp_TmnCode=O1BO63U2&vnp_TxnRef=07113412&vnp_Version=2.1.0&vnp_SecureHash=a7c2b84bbde94453b85ed4f3be953813625b2fbb6524509bfaed4faeb510ea9f7bdb53fba862c0165c2595cdd0f5409183baca0f1ebc96374e211e165e296ea6"
        window.open(result, '_blank');

        // const ahahah = 'https://sandbox.vnpayment.vn/paymentv2/Payment/Error.html?code=03';
        // window.open(ahahah, '_blank');

        // window.location.href = result;
        return result;
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <Form onFinish={handlePayment}>
      <Form.Item label="Input" name="bankCode">
        <Input />
      </Form.Item>
      <Form.Item label="Select" name="language">
        <Input />
      </Form.Item>

      <Form.Item label="InputNumber" name="amount">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Payment;
