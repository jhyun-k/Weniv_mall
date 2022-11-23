import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"
import ProductImage from './ProductImage'
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';

const ProductItem = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

export default function Card({item}) {
  const itemUrl = `/detail/${item.id}`

  return (
    <Link to={itemUrl}>
    <ProductItem>
        <ProductImage item={item}/>
        <ProductName item={item}/>
          <ProductPrice item={item}/>
    </ProductItem>
    </Link>
    
  )
}
