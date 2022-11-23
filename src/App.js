import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { Routes,Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/cart' element={<CartPage/>}></Route>
      <Route path='/detail/:id' element={<ProductDetail/>}></Route>
    </Routes>
  );
}
export default App;
