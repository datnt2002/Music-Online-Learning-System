import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { privateRoutes, publicRoutes } from './routes';
import Layout from 'antd/es/layout/layout';
import HeaderAdmin from './components/Layout/Admin/HeaderAdmin';
import SiderAdmin from './components/Layout/Admin/SiderAdmin';

function App() {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <HeaderAdmin />
        <Layout>
          <SiderAdmin />
          <Routes>
            {publicRoutes.map(({ path, element }, index) => {
              return <Route key={index} path={path} element={element} />;
            })}
            {privateRoutes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
