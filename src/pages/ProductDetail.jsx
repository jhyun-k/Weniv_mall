import React, { useState,useContext } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../components/card/Card';
import {callAPIData} from './../db/callAPI';


export default function ProductDetail() {
    const [loadData, setLoadData] = useState(null)

    useContext(callAPIData).then((data) => {
        setLoadData(data)
    })
    
    const { id } = useParams();
    console.log(loadData);
  return (
    <>
      <h1>hello Product {id}</h1>
      <Card/>
    </>
)}
