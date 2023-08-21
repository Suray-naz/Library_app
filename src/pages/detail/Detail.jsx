
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'

const Detail = () => {
  const {state} = useLocation();
  const {id} = useParams();
  const [detailData, setDetailData] = useState("")

  const getDetailsData = async () =>{
    try {
      const {data} = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${process.env.REACT_APP_apiKey}`)

    } catch (error) {}
  };
  useEffect(() =>{
    getDetailsData();
  }, [])

  return (
    <div>Detail</div>
  )
}

export default Detail