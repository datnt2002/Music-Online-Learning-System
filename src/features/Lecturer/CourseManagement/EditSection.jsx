import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Table, Button, Layout, Modal, Form } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { EditOutlined } from '@ant-design/icons';

import { editDraftSectionAction, getDetailDraftCourseAction } from '../../../redux/slice/courseSlice';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import splitSlash from '../../../utils/splitSlash';
import { SECTION_TABLE } from '../../../constants';
import ModalEditSection from '../../../components/Container/ModalContainer/ModalEditSection';

const EditSection = () => {
  const [open, setOpen] = useState(false);
  const [dataOfRecord, setDataOfRecord] = useState();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = splitSlash(pathname);

  const currentSections = useSelector((state) => state.course.listSections);
  console.log(currentSections);
  useEffect(() => {
    dispatch(
      getDetailDraftCourseAction({
        courseId: pathNameArray[2],
      })
    );
  }, []);

  const columns = [
    {
      title: SECTION_TABLE.SECTION_ID_TITLE,
      dataIndex: SECTION_TABLE.SECTION_ID_DATA,
      key: SECTION_TABLE.SECTION_ID_DATA,
    },
    {
      title: SECTION_TABLE.SECTION_NAME_TITLE,
      dataIndex: SECTION_TABLE.SECTION_NAME_DATA,
      key: SECTION_TABLE.SECTION_NAME_DATA,
    },
    {
      title: SECTION_TABLE.COURSE_ID_TITLE,
      dataIndex: SECTION_TABLE.COURSE_ID_DATA,
      key: SECTION_TABLE.COURSE_ID_DATA,
    },
    {
      title: 'Action',
      key: 'action',
      width: 80,
      render: (_, record) => (
        <Button
          onClick={() => {
            showModal(record);
          }}
          icon={<EditOutlined />}
        ></Button>
      ),
    },
  ];
  const data = currentSections.map((section) => {
    return {
      key: section?.sectionId,
      sectionId: section?.sectionId,
      sectionName: section?.sectionName,
      courseId: section?.courseId,
    };
  });

  const showModal = (record) => {
    setDataOfRecord(record);
    setOpen(true);
  };

  const handleEditSection = (values) => {
    dispatch(
      editDraftSectionAction({
        courseId: values.courseId,
        sectionId: values.sectionId,
        sectionName: values.sectionName,
      })
    );
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Layout style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto', padding: '0 24px 24px' }}>
      <div className="my-5 ml-6">
        <BreadCrumbCustom />
      </div>
      <Content className="min-h-screen overflow-auto">
        <Table columns={columns} dataSource={data} />;
        {open && (
          <Modal
            open={open}
            title="Edit Section"
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button
                className="bg-black"
                key="submit"
                type="primary"
                onClick={() => {
                  form.submit();
                }}
              >
                Edit section
              </Button>,
            ]}
          >
            {dataOfRecord && <ModalEditSection onFinish={handleEditSection} form={form} data={dataOfRecord} />}
          </Modal>
        )}
      </Content>
    </Layout>
  );
};

export default EditSection;
