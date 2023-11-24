import React from 'react';

import { Table } from 'antd';
import dayjs from 'dayjs';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import flattenObj from '../../../utils/flattenObj';
import { DAY_FORMAT, TABLE_COLUMN } from '../../../constants';
import formatTitleTable from '../../../utils/formatTitleTable';

const ExpandedTable = ({ dataSource, actions, onClickExpand, expandedData, pagination, setPageIndex }) => {
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
      let data;
      if (column === TABLE_COLUMN.CREATED_AT || column === TABLE_COLUMN.UPDATED_AT) {
        data = {
          key: column,
          title: formatTitleTable(column),
          dataIndex: column,
          sorter: (a, b) => {
            if (a[column] > b[column]) {
              return 1;
            } else if (a[column] < b[column]) {
              return -1;
            } else {
              return 0;
            }
          },

          fixed: index < 2,
          width: 130,
          render: (text) => {
            return <span>{dayjs(text).format(DAY_FORMAT.D_M_Y)}</span>;
          },
        };
        return data;
      } else {
        data = {
          key: column,
          title: formatTitleTable(column),
          dataIndex: column,
          sorter: (a, b) => {
            if (a[column] > b[column]) {
              return 1;
            } else if (a[column] < b[column]) {
              return -1;
            } else {
              return 0;
            }
          },

          fixed: index < 2,
          width: 130,
        };
        return data;
      }
    });
    columns.push({
      title: 'Actions',
      fixed: 'right',
      width: 100,
      align: 'center',
      render: (record) => {
        return actions(record);
      },
    });

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, sorter);
    };

    const totalColumnsWidth = columns.reduce((acc, column) => acc + column.width, 0);
    return (
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) =>
            expandedData.map((data, index) => {
              return data.cateId === record.cateId ? (
                <div key={index} className="flex justify-between mx-5 mb-2">
                  <p>
                    Sub Cate ID: {data.subCateId} | Sub Category Name: {data.subCateName}
                  </p>
                </div>
              ) : (
                <span key={index}></span>
              );
            }),
          expandIcon: ({ expanded, onExpand, record }) =>
            expanded ? (
              <MinusOutlined onClick={(e) => onExpand(record, e)} />
            ) : (
              <PlusOutlined
                onClick={(e) => {
                  onClickExpand(record);
                  onExpand(record, e);
                }}
              />
            ),
        }}
        dataSource={flattenData}
        onChange={onChange}
        scroll={{ x: totalColumnsWidth }}
        pagination={{
          pageSize: pagination.pageSize,
          total: pagination.totalCount,
          onChange: (page) => {
            setPageIndex(page);
          },
        }}
      />
    );
  }
};

export default ExpandedTable;
