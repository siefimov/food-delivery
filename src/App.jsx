import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Shop />} />
        <Route path='cart' element={<Cart />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
