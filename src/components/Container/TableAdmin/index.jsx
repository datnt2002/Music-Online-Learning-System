import React from 'react';
import { Empty, Table } from 'antd';

import flattenObj from '../../../utils/flattenObj';

const TableAdmin = ({ dataSource, actions }) => {
  if (dataSource.length > 0) {
    //solve nested object because of join database
    const flattenData = dataSource.map((data, index) => {
      //add a pair key and value to avoid warning unique table data
      const clone = { ...data };
      Object.assign(clone, { key: index });
      const result = flattenObj(clone);
      return result;
    });

    //get title of table by get key of obj
    const titleColumnList = Object.keys(flattenData[0]);
    const columns = titleColumnList.map((column, index) => {
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
      width: 80,
      align: 'center',
      render: (record) => {
        return actions(record);
      },
    });

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    const totalColumnsWidth = columns.reduce((acc, column) => acc + column.width, 0);
    return (
      <Table
        size="small"
        columns={columns}
        dataSource={flattenData}
        onChange={onChange}
        className="max-w-full"
        scroll={{ x: totalColumnsWidth }}
      />
    );
  } else {
    return <Empty />;
  }
};

export default TableAdmin;
