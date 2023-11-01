import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { adminRoutes, authorRoutes, publicRoutes, userRoutes } from './routes';
import ForgotPassword from './features/Authentication/ForgotPassword';
import Signin from './features/Authentication/Signin';
import Signup from './features/Authentication/Signup';
import { NotFound } from './components/Common';
import VerifySuccess from './components/Common/VerifySuccess';
import VerifyFail from './components/Common/VerifyFail';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verify-success" element={<VerifySuccess />} />
        <Route path="/verify-fail" element={<VerifyFail />} />
        <Route path="*" element={<NotFound />} />

        {publicRoutes.map(({ path, element }, index) => {
          return <Route key={index} path={path} element={element} />;
        })}
        {userRoutes.map(({ path, element }, index) => (
          <Route key={index} path={`/user/${path}`} element={element} />
        ))}
        {authorRoutes.map(({ path, element }, index) => {
          return <Route key={index} path={`/lecturer/${path}`} element={element} />;
        })}
        {adminRoutes.map(({ path, element }, index) => (
          <Route key={index} path={`/admin/${path}`} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
