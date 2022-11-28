import React, { useState,useContext } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../components/card/Card';
import {callAPIData} from './../db/callAPI';


export default function ProductDetail(props) {
    
    const { id } = useParams();
    const loadData = props.data[id-1]
    console.log(props.data[id-1])
    const url = 'https://test.api.weniv.co.kr/'+loadData.thumbnailImg

  return (
    <>
      <h1>hello Product {id}</h1>
      <div>{loadData.productName}</div>
      <img src={url} alt=''/>
      <div>{loadData.price}</div>
    </>
)}
