import { Table } from 'antd';
import React from 'react';

const TableAdmin = ({ dataSource }) => {
  const titleColumnList = dataSource.map((course) => {
    return Object.keys(course);
  });

  const columns = titleColumnList[0].map((column, index) => {
    const data = {
      title: column,
      dataIndex: column,
      sorter: {
        compare: (a, b) => a.column - b.column,
        multiple: index,
      },
      fixed: index < 2,
      width: 200,
    };
    return data;
  });
  console.log(columns);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <Table columns={columns} dataSource={dataSource} onChange={onChange} className="max-w-full" scroll={{ x: true }} />
  );
};

export default TableAdmin;
