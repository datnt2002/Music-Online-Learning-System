import React, { useEffect } from 'react';
import { Button, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { banks } from '../../../constants/banks';
import { createPaymentAction, getDetailCourseAction } from '../../../redux/slice/courseSlice';
import VNPAYLogo from '../../../assets/imgs/bank/Logo-VNPAY.webp';
import { STORAGE } from '../../../constants';
import Loading from '../../../components/Common/Loading';

const ChoosePaymentMethod = () => {
  const dispatch = useDispatch();
  const currentCourse = useSelector((state) => state.course.currentCourse);
  const loading = useSelector((state) => state.course.loading);
  useEffect(() => {
    dispatch(
      getDetailCourseAction({
        courseId: localStorage.getItem(STORAGE.COURSE_ID),
      })
    );
  }, []);

  const handleChoosePaymentMethod = (bankCode) => {
    dispatch(
      createPaymentAction({
        bankCode: bankCode,
        amount: currentCourse.price,
      })
    );
  };
  return (
    <>
      {loading && <Loading />}
      <Divider className="bg-black mt-0" />
      <div className="w-2/5 my-10 mx-auto border border-black rounded-2xl overflow-hidden">
        <div>
          <img src={VNPAYLogo} alt="" className="w-40 pt-5 px-5" />
          <Divider className="mb-0 bg-black" />

          <div className="flex flex-col  bg-gray-100 text-center px-7 py-5">
            <h1 className="font-medium text-3xl mb-5">Select payment method</h1>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between bg-white p-8 align-middle cursor-pointer border border-black">
                <img src={VNPAYLogo} alt="" className="w-24 " />
                <h1>VNPAY scanner app</h1>
                {/* <img src="" alt="" /> */}
              </div>
              <div className="bg-white p-8 align-middle hover:shadow-2xl cursor-pointer  border border-black">
                <h1>Domestic card and bank account</h1>
                <div>
                  <Divider className="bg-black" />
                  <div className="grid grid-cols-4 gap-3">
                    {banks.map((bank, index) => {
                      return (
                        <Button
                          key={index}
                          className="h-12 border border-black"
                          onClick={() => {
                            handleChoosePaymentMethod(bank.bankCode);
                          }}
                        >
                          <img className="h-full p-1 object-fit" src={bank.img} alt="" />
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 align-middle hover:shadow-2xl cursor-pointer  border border-black">
                <div className="flex justify-between">
                  <img src={VNPAYLogo} alt="" className="w-24" />
                  <h1> VNPAY e-wallet</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoosePaymentMethod;
