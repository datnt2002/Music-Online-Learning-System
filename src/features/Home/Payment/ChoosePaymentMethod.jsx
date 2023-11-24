import React from 'react';
import { Button, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

import { banks } from '../../../constants/banks';
import VNPAYLogo from '../../../assets/imgs/bank/Logo-VNPAY.webp';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import { USER_ROUTE } from '../../../constants';

const ChoosePaymentMethod = () => {
  const navigate = useNavigate();
  const handleChoosePaymentMethod = (bankCode) => {
    navigate(USER_ROUTE.PURCHASE_ECOIN + `/${bankCode}`);
  };
  return (
    <>
      <Divider className="bg-black mt-0" />
      <div
        style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}
        className="min-h-screen py-8 md:py-12"
      >
        <div className="w-full sm:w-2/3 lg:w-1/2 my-10 mx-auto border border-black rounded-2xl overflow-hidden">
          <div>
            <img src={VNPAYLogo} alt="" className="w-40 pt-5 px-5" />
            <Divider className="mb-0 bg-black" />

            <div className="flex flex-col text-center px-7 py-5">
              <h1 className="font-medium text-3xl mb-5">Select payment method</h1>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between hover:shadow-md bg-white p-8 align-middle cursor-pointer border border-black">
                  <img src={VNPAYLogo} alt="" className="w-24 " />
                  <h1>VNPAY scanner app</h1>
                </div>
                <div className="bg-white p-8 align-middle hover:shadow-md border border-black">
                  <h1>Domestic card and bank account</h1>
                  <div>
                    <Divider className="bg-black" />
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {banks.map((bank, index) => {
                        return (
                          <Button
                            key={index}
                            className="h-12 border border-black cursor-pointer "
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
                <div className="bg-white p-8 align-middle hover:shadow-md cursor-pointer border border-black">
                  <div className="flex justify-between">
                    <img src={VNPAYLogo} alt="" className="w-24" />
                    <h1> VNPAY e-wallet</h1>
                  </div>
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
