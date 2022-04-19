import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


export default function Restaurant() {
  
  const {data2Id} = useParams();
  const [itemData, setItemData] = useState({})

  useEffect(
    async () => {
      if (data2Id != null){
        console.log("params",data2Id);
        const url = "/data/" + data2Id;

      try{
        const response = await axios.get(url)
        const resData = response.data
        setItemData(resData)
      }catch(err) {
            console.log("Err getting item data",err)
      }
      } 
    }, [data2Id]
  );
    
  return (
    <main style={{ padding: "1rem" }}>
      <h2>{itemData.hotel}</h2>
      <p>Cuisine - {itemData.cuisine}</p>  
      <p>Location - {itemData.location}</p>
      <p>Description - {itemData.description}</p>
    </main>
  );
}  
