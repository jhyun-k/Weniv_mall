import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { Routes,Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useContext, useEffect, useState } from 'react';
// import { callAPIData } from './db/callAPI';
import axios from 'axios'

function App() {
  const [loadData, setLoadData] = useState(null)

//   useContext(callAPIData).then((data) => {
//     setLoadData(data)
// })

useEffect(()=>{
  axios
    .get(`https://test.api.weniv.co.kr/mall`)
    .then(json => {
      if(json.status===200){
        setLoadData(json.data)
      }
    })
}, [])
  console.log(loadData)

  return (
    
    <Routes>
      <Route path='/' element={<HomePage data={loadData}/>}></Route>
      <Route path='/cart' element={<CartPage/>}></Route>
      <Route path='/detail/:id' element={<ProductDetail data={loadData}/>}></Route>
    </Routes>
  );
}
export default App;
