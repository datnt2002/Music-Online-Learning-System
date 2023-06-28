import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { publicRoutes } from './routes';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {publicRoutes.map(({ path, element }, index) => {
          return <Route key={index} path={path} element={element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
