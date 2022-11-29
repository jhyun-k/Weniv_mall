import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import heartOn from '../../assets/images/icon-heart-on.svg';
import heartOff from '../../assets/images/icon-heart.svg';

const ProductItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const NameCont = styled.div`
  display: flex;
`;
const HeartOff = styled.button`
  margin-top: 20px;
  width: 22px;
  height: 22px;
  border: none;
  background: url(${heartOff}) no-repeat center / contain;
`;
const HeartOn = styled.button`
  margin-top: 20px;
  width: 22px;
  height: 22px;
  border: none;
  background: url(${heartOn}) no-repeat center / contain;
`;

export default function Card({ item }) {
  // const itemUrl = `/detail/${item.id}`
  const [heart, setHeart] = useState(0);

  const heartOn = (e) => {
    heart === 0 ? setHeart(1) : setHeart(0);
    e.preventDefault();
  };
  return (
    <Link to={`/detail/${item.id}`}>
      <ProductItem>
        <ProductImage item={item} />
        <NameCont>
          <ProductName item={item} />
          {heart === 0 ? (
            <HeartOff onClick={heartOn} />
          ) : (
            <HeartOn onClick={heartOn} />
          )}
        </NameCont>
        <ProductPrice item={item} />
      </ProductItem>
    </Link>
  );
}
