import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { Routes,Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useContext, useState } from 'react';
import { callAPIData } from './db/callAPI';

function App() {
  const [loadData, setLoadData] = useState(null)

  useContext(callAPIData).then((data) => {
    setLoadData(data)
})
  return (
    
    <Routes>
      <Route path='/' element={<HomePage data={loadData}/>}></Route>
      <Route path='/cart' element={<CartPage/>}></Route>
      <Route path='/detail/:id' element={<ProductDetail data={loadData}/>}></Route>
    </Routes>
  );
}
export default App;
