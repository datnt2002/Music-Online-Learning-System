import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { privateRoutes, publicRoutes } from './routes';
import { PrivateRoute } from './components/Common';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {publicRoutes.map(({ path, element }, index) => {
          return <Route key={index} path={path} element={element} />;
        })}
        {/* {privateRoutes.map(({ path, element }, index) => (
          <PrivateRoute key={index} path={path} element={element} />
        ))} */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
