import React from 'react';
import styled from 'styled-components';

const ProductImg = styled.div`
  position: relative;
  width: 380px;
  height: 380px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;
`;

export default function ProductImage({ item }) {
  const url = 'https://test.api.weniv.co.kr/' + item.thumbnailImg;

  return (
    <ProductImg>
      <img src={url} alt="" />
    </ProductImg>
  );
}

// function ProductDetail(){
//   const { id } = useParams();
//   console.log(id);
//   // const imgUrl = `www.hojun.com/product/${id}`
// return (
//   <>
//     <h1>hello Product {id}</h1>
//   </>
// )
// }
