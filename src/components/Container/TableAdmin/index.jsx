import React from 'react';
import { Table } from 'antd';

const TableAdmin = ({ dataSource }) => {
  //bi lay ra moi row 1 lan title, thanh ra neu co 4 row se la x4 title lap lai
  const titleColumnList = dataSource.map((course) => {
    return Object.keys(course);
  });
  // the result of titleColumnList is [[]] so flat array ;
  const columns = titleColumnList.flat().map((column, index) => {
    const data = {
      title: column,
      dataIndex: column,
      sorter: {
        compare: (a, b) => a.column - b.column,
        multiple: index,
      },
      fixed: index < 2,
      width: 120,
    };
    return data;
  });
  columns.push({
    title: 'Actions',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  });
  console.log(columns);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const totalColumnsWidth = columns.reduce((acc, column) => acc + column.width, 0);
  return (
    <Table
      size="small"
      columns={columns}
      dataSource={dataSource}
      onChange={onChange}
      className="max-w-full"
      scroll={{ x: totalColumnsWidth }}
      // expandable={{
      //   defaultExpandAllRows: true,
      // }}
    />
  );
};

export default TableAdmin;
