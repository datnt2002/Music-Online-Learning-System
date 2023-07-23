import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, ContactsOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

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
        <p className="my-3">Ha Noi, Viet Nam</p>

        <Link>
          <Button
            type="primary"
            className="rounded-full w-full text-white font-bold text-base py-2 h-fit"
            icon={<EditOutlined />}
          >
            Edit your profile
          </Button>
        </Link>

        <Link>
          <Button
            type="primary"
            className="rounded-full w-full text-white font-bold text-base py-2 h-fit my-4"
            icon={<ContactsOutlined />}
          >
            Teach on aleualeu
          </Button>
        </Link>
      </div>

      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
      >
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
          title="Card title"
          description="This is the description"
        />
      </Card>

      <h2>Nguyen Trong Dat</h2>
      <h2>Major</h2>
      <h2>Location</h2>

      {/* Social network */}
      <h2>Nguyen Trong Dat</h2>
      <h2>Major</h2>
      <h2>Location</h2>
    </div>
  );
};

export default LeftContainer;
