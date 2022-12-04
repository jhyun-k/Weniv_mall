import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useContext, useEffect, useState } from 'react';
// import { callAPIData } from './db/callAPI';
import axios from 'axios';

function App() {
  const [loadData, setLoadData] = useState(null);
  const [cartData, setCartData] = useState([]);

  //   useContext(callAPIData).then((data) => {
  //     setLoadData(data)
  // })

  const changeCart = (data) => {
    setCartData((oldData) => {
      return [...oldData, data];
    });
  };

  useEffect(() => {
    axios.get(`https://test.api.weniv.co.kr/mall`).then((json) => {
      if (json.status === 200) {
        setLoadData(json.data);
      }
    });
  }, []);
  console.log(loadData);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Link to="/cart">카트</Link>
      <Routes>
        <Route path="/" element={<HomePage data={loadData} />}></Route>
        <Route
          path="/cart"
          element={<CartPage cartData={cartData} changeCart={changeCart} />}
        ></Route>
        <Route
          path="/detail/:id"
          element={
            <ProductDetail
              data={loadData}
              cartData={cartData}
              changeCart={changeCart}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
