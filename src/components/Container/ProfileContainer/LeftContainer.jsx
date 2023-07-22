import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;
const LeftContainer = () => {
  return (
    <>
      {/* avatar */}
      <div>
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
          src="https://www.astonvet.com/images/blog/fat-dog.jpg"
        />

        <h2>Nguyen Trong Dat</h2>
        <h2>Major</h2>
        <h2>Location</h2>

        <button>Edit your profile</button>
        <button>teach on gauaguaang ang</button>
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
    </>
  );
};

export default LeftContainer;
