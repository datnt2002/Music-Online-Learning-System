import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_ROUTE } from '../../constants';
import logo from '../../assets/imgs/fullLogo.png';
import { Divider } from 'antd';
import { FacebookOutlined, InstagramOutlined, GithubOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer class="bg-white/50 bg-opacity-40">
      <Divider className="bg-black mb-1" />

      <div class="w-full py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <Link to={PUBLIC_ROUTE.DEFAULT} class="flex items-center ml-48">
              <img src={logo} class="h-24 mr-3" alt="Logo" />
            </Link>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 mr-48">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <Link class="hover:underline">Ant Design</Link>
                </li>
                <li>
                  <Link class="hover:underline">Tailwind CSS</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <Link to="https://github.com/datnt2002/final" class="hover:underline ">
                    Github
                  </Link>
                </li>
                <li>
                  <Link class="hover:underline">Discord</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <Link class="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link class="hover:underline">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="ml-6 text-center">
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Social</h2>
              <div class="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
                <Link href="#" class="text-gray-500 hover:text-gray-900">
                  <FacebookOutlined className="text-lg" />
                </Link>
                <Link href="#" class="text-gray-500 hover:text-gray-900">
                  <InstagramOutlined className="text-lg" />
                </Link>
                <Link href="#" class="text-gray-500 hover:text-gray-900">
                  <GithubOutlined className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
