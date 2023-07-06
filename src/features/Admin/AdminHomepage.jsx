import { Layout } from 'antd';
import HeaderAdmin from '../../components/Layout/Admin/HeaderAdmin';
import SiderAdmin from '../../components/Layout/Admin/SiderAdmin';
import ContentAdmin from '../../components/Layout/Admin/ContentAdmin';

const AdminHomepage = () => {
  return (
    <Layout>
      <HeaderAdmin />
      <Layout>
        <SiderAdmin />
        <ContentAdmin />
      </Layout>
    </Layout>
  );
};

export default AdminHomepage;
