import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { EditOutlined, EnvironmentOutlined, ContactsOutlined, FacebookFilled } from '@ant-design/icons';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const LeftContainer = () => {
  return (
    <div className="flex flex-col items-center">
      {/* avatar */}
      <div className="text-center">
        <Avatar
          size={110}
          icon={<AntDesignOutlined />}
          src="https://www.astonvet.com/images/blog/fat-dog.jpg"
          className="mb-2"
        />

        <h1 className="text-2xl font-semibold">Nguyen Trong Dat</h1>
        <p>Ke huy diet UI</p>
        <p className="my-3">
          <EnvironmentOutlined className="align-[0.125rem]" /> Ha Noi, Viet Nam
        </p>

        <Link>
          <Button
            type="primary"
            className="rounded-full w-full text-white font-bold text-base py-2 h-fit"
            icon={<EditOutlined className="align-[0.125rem]" />}
          >
            Edit your profile
          </Button>
        </Link>

        <Link>
          <Button
            type="primary"
            className="rounded-full w-full text-white font-bold text-base py-2 h-fit my-4`"
            icon={<ContactsOutlined className="align-[0.125rem]" />}
          >
            Teach on aleualeu
          </Button>
        </Link>
      </div>

      <Card size="small" title="About Dat dep zai" className="w-full mt-4">
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      {/* table statistic */}
      <table className="w-full">
        <tr>
          <td>Project Views</td>
          <td className="text-right">173</td>
        </tr>
        <tr>
          <td>Appreciations</td>
          <td className="text-right">173</td>
        </tr>
        <tr>
          <td>Followers</td>
          <td className="text-right">173</td>
        </tr>
        <tr>
          <td>Following</td>
          <td className="text-right">173</td>
        </tr>
      </table>

      {/* Social network */}
      <div className="w-full">
        <h2>On the web</h2>
        <Link>
          <Button
            type="primary"
            className="rounded-full w-full text-white font-bold text-base py-2 h-fit"
            icon={<FacebookFilled className="align-[0.125rem]" />}
          >
            Facebook
          </Button>
        </Link>

        <Link>
          <Button
            type="primary"
            className="rounded-full w-full text-white font-bold text-base py-2 h-fit my-4`"
            icon={<ContactsOutlined className="align-[0.125rem]" />}
          >
            Teach on aleualeu
          </Button>
        </Link>
      </div>

      {/* About me */}
      <div className="max-w-[350px]">
        <p>About me</p>
        <p>
          Xin chao! My name is Mai. I am a graphic designer and illustrator. I believe that graphic design is all about
          having fun and exploring new perspectives, especially different culture and social knowledge.
        </p>
      </div>

      <p>MEMBER SINCE: MAY 3, 2021</p>
    </div>
  );
};

export default LeftContainer;
