import React from 'react';
import styled from 'styled-components';

const ProductPriceDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Mprice = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;
export default function ProductPrice({ item }) {
  return (
    <ProductPriceDiv>
      <Mprice>{item.price}</Mprice>
    </ProductPriceDiv>
  );
}
