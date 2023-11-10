import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header } from 'antd/es/layout/layout';
import { Button, Layout, Popover } from 'antd';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';

import AuthenticationButton from './HeaderComponent/AuthenticationButton';
import CombineAvatarAndCart from './HeaderComponent/CombineAvatarAndCart';
import CategoryDropdown from '../../Container/CategoryContainer/CategoryDropdown';
import Searchbox from '../../Container/SearchBoxContainer/SearchBox';
import { PUBLIC_ROUTE } from '../../../constants';
import logo from '../../../assets/imgs/fullLogo.png';

const HeaderDefault = () => {
  const isAuthenticated = useSelector((state) => state.authentication.isLoggedIn);
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpeMenu] = useState(false);
  const handleOpenChangeSearch = (newOpen) => {
    setOpenSearch(newOpen);
  };
  const handleOpenChangeMenu = (newOpen) => {
    setOpeMenu(newOpen);
  };
  const content = (
    <div className="flex flex-col items-center">
      <Link className="ml-2 mb-2" to={PUBLIC_ROUTE.FORUMS}>
        <Button className="border border-black">Forums</Button>
      </Link>
      <div className="flex ml-2">{isAuthenticated ? <CombineAvatarAndCart /> : <AuthenticationButton />}</div>
    </div>
  );

  return (
    <Layout>
      <Header className="flex justify-between bg-white h-16 ">
        <div className="flex w-auto items-center lg:w-auto">
          <div className="hidden md:flex">
            <Searchbox />
          </div>
          <div className="flex border -ml-4 border-black p-1 rounded-lg mr-4 md:hidden">
            <Popover content={<Searchbox />} trigger="click" open={openSearch} onOpenChange={handleOpenChangeSearch}>
              <SearchOutlined />
            </Popover>
          </div>
          <CategoryDropdown />
        </div>

        <div className="flex w-28 items-center -ml-4">
          <Link className="" to={PUBLIC_ROUTE.DEFAULT}>
            <img src={logo} alt="logo" className="max-w-full h-auto" />
          </Link>
        </div>

        <div className="hidden md:flex">
          <Link className="mr-4" to={PUBLIC_ROUTE.FORUMS}>
            Forums
          </Link>

          <div className="flex ml-2">{isAuthenticated ? <CombineAvatarAndCart /> : <AuthenticationButton />}</div>
        </div>
        <div className="flex items-center -mr-4 md:hidden">
          <Popover content={content} trigger="click" open={openMenu} onOpenChange={handleOpenChangeMenu}>
            <MenuOutlined />
          </Popover>
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderDefault;
