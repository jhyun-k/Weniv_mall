import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import heartOn from '../../assets/images/icon-heart-on.svg';
import heartOff from '../../assets/images/icon-heart.svg';

const ImageContainer = styled.div``;

const ProductItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const NameCont = styled.div`
  display: flex;
`;
const HeartOn = styled.button`
  margin-top: 20px;
  width: 22px;
  height: 22px;
  border: none;
  background: url(${(props) => (props.state ? heartOn : heartOff)}) no-repeat
    center;
`;

export default function Card({ item }) {
  // const itemUrl = `/detail/${item.id}`
  const [heart, setHeart] = useState(0);

  const ToggleHeart = () => {
    setHeart((prev) => !prev);
  };

  const navigate = useNavigate();

  const ToDetail = () => {
    navigate(`/detail/${item.id}`, { item });
  };
  return (
    <ProductItem>
      <ImageContainer onClick={ToDetail}>
        <ProductImage item={item} />
      </ImageContainer>
      <NameCont>
        <ProductName item={item} />
        <HeartOn onClick={ToggleHeart} state={heart} />
      </NameCont>
      <ProductPrice item={item} />
    </ProductItem>
  );
}
