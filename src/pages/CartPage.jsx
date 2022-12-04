import React, { useState } from 'react';

export default function CartPage({ cartData, changeCart }) {
  const [multi, setMulti] = useState(1);
  const 곱해줭 = () => {
    setMulti((oldData) => oldData * 2);
  };

  return (
    <>
      <div>
        {cartData.map((data, index) => {
          return (
            <div>
              <span key={index}>{data.item}</span>
              <span key={index}>{data.price}</span>
            </div>
          );
        })}
        <div>{multi}</div>
        <button
          onClick={() => {
            곱해줭();
            console.log(multi);
          }}
        >
          곱해줭
        </button>
      </div>
    </>
  );
}
