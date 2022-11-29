import React, { useState} from 'react'
import { useParams } from 'react-router-dom';
import shoppingCart from '../assets/images/icon-shopping-cart-violet.svg'
import heartOn from '../assets/images/icon-heart-on.svg'
import heartOff from '../assets/images/icon-heart.svg'

import styled from 'styled-components';


const Container = styled.div`
  display : flex;
  justify-content:center;
  margin-top : 60px;
`
const ContainRight = styled.div`
  display:flex;
  flex-direction:column;
  width:440px;
`
const ItemImg = styled.img`
width: 400px;
height:400px;
border-radius:10px;
display: inline;
margin-right: 30px;
`
const Title = styled.h1`
  font-size:24px;
  margin-bottom:10px;
`
const Price = styled.strong`
  font-size:24px;
  font-weight:bold;
  margin-bottom:80px;
`
const Counter = styled.div`
  width: 120px;
  display:flex;
  font-size:16px;
  border:2px solid #bdbdbd;
  border-radius:5px;
  margin:22px 0 40px;
  h1{
    width: 40px;
    height:40px;
    line-height:40px;
    text-align:center;
    font-weight:bold;
  }
  button{
    width:40px;
    height:40px;
    background-color:transparent;
    font-size:22px;
  }
`
const PriceCont = styled.div`
  width : 430px;
  display:flex;
  justify-content:space-between;
  margin-bottom:20px;
  h3{
    font-size:18px;
    font-weight:bold;
    line-height:36px;
  }
  div{
    .count{
      color:red;
      margin-right:10px;
      font-size:20px;
      font-weight:bold;
    }
    .total{
      font-size:36px;
      color:red;
      font-weight:bold;
    }
  }
`
const Buttons = styled.div`
  display:flex;
  width: 440px;
  gap:6px;
  .buy{
    width:308px;
    height:60px;
    background-color:#6327FE;
    color: #fff;
    font-size:18px;
    border-radius:5px;

  }
  .cart{
    width:60px;
    height:60px;
    background-color: transparent;
    border:1px solid #bdbdbd;
    border-radius:5px;
    background: url(${shoppingCart}) no-repeat center / 30px 30px;
  }
`
const HeartOff = styled.button`
    width:60px;
    height:60px;
    background-color: transparent;
    border:1px solid #bdbdbd;
    border-radius:5px;
    background: url(${heartOff}) no-repeat center / 30px 30px;
`
const HeartOn = styled.button`
    width:60px;
    height:60px;
    background-color: transparent;
    border:1px solid #bdbdbd;
    border-radius:5px;
    background: url(${heartOn}) no-repeat center / 30px 30px;
`
const DetailInfo = styled.div`
  display:flex;
  flex-direction:column;
  width:1000px;
  margin : auto; 
  /* border:3px solid black; */

`


export default function ProductDetail(props) {
    
    const { id } = useParams();
    const loadData = props.data[id-1]
    const url = 'https://test.api.weniv.co.kr/'+loadData.thumbnailImg
    const detail = loadData.detailInfoImage

    const [heart, setHeart] = useState(0)

    const heartOn = (e)=>{
      heart===0?setHeart(1):setHeart(0);
      e.preventDefault()
    }
    console.log(loadData)

    const [count, setCount] = useState(0)
    const onIncrease = () => {
      setCount(prevCount => prevCount + 1);
    };
    const onDecrease = () => {
      setCount(prevCount => prevCount - 1);
    };


  return (
    <>
    {
    loadData==null?<></>:
    <>
    <Container>
      <ItemImg src={url} alt=''/>
      <ContainRight>
      <Title>{loadData.productName}</Title>
      <Price>{loadData.price}원</Price>
      <p>택배배송/무료배송</p>
      <Counter>
      <button onClick={onDecrease}>-</button>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      </Counter>
      <PriceCont>
      <h3>총 상품금액</h3>  
      <div>총 수량 <span className='count'>{count}</span>개 <span className='total'>{loadData.price*count} </span>원</div>
      </PriceCont>
      <Buttons>
      <button className='buy'>바로구매</button>
      <button className='cart'></button>
      {
          heart===0?
          <HeartOff onClick={heartOn}/>
          :
          <HeartOn onClick={heartOn}/>
        }
      </Buttons>
      </ContainRight>
      
    </Container>
    <DetailInfo>
      {
        detail.map((item,index)=> <img src={`https://test.api.weniv.co.kr/${item}`} alt=''/>)
      }
      </DetailInfo>
    </>
      }
    </>
)}
