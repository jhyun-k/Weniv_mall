import React from 'react'
import styled from "styled-components"
import Card from '../components/card/Card';
import { Link} from 'react-router-dom';
import shoppingCart from '../assets/images/icon-shopping-cart-white.svg'


const Product = styled.main`
    display: flex;
    justify-content: center;
    margin-top: 160px;
    padding-bottom: 156px;
`
const ProductList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
    width: 1260px;
    margin-right: 60px;
`

const CartBtn = styled.button`
    background: var(--main-color) url(${shoppingCart}) no-repeat left 18px center / 40px 40px;
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
`

export default function HomePage(props) {
    // const [loadData, setLoadData] = useState(null)

    // useContext(callAPIData).then((data) => {
    //     setLoadData(data)
    // })
    const loadData = props.data
  return (
    <>
    <Link to="./cart"><CartBtn/></Link>
    
    <Product>
        {
            loadData !== null?
            <>
                <ProductList>
                    {loadData.map(item=><Card key={item.id} {...{item}}/>)}
                    {/* {console.log(loadData)} */}
                </ProductList>
            </>
            :
            <div>이상한 페이지 옴</div>
        }
    </Product>
    </>
  )
}
