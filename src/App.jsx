import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { adminRoutes, privateRoutes, publicRoutes } from './routes';
import ForgotPassword from './features/Authentication/ForgotPassword';
import Signin from './features/Authentication/Signin';
import Signup from './features/Authentication/Signup';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        {publicRoutes.map(({ path, element }, index) => {
          return <Route key={index} path={path} element={element} />;
        })}
        {privateRoutes.map(({ path, element }, index) => {
          return <Route key={index} path={path} element={element} />;
        })}

        {adminRoutes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
