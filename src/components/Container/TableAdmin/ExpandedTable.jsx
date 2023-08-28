import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

const ExpandedTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState();
  const [pageSize, setPageSize] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        return res.json();
      })
      .then((data) => setDataSource(data))
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => {
        return a.id > b.id;
      },
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'completed',
      dataIndex: 'completed',
      key: 'completed',
      render: (completed) => <p>{completed ? 'Complete' : 'In progress'}</p>,
    },
  ];

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => <p>{record.description}</p>,
      }}
      dataSource={dataSource}
      pagination={{
        current: page,
        pageSize: pageSize,
        onChange: (page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        },
      }}
    />
  );
};

export default ExpandedTable;
