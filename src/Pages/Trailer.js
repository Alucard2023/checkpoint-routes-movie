import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { moviesData } from '../constant/Data';
import './Trailer.css';
const Trailer = () => {
    const{id}=useParams();
    const[data,setData]=useState({})
    useEffect(()=>{
        const movieT=moviesData.find((el)=>el.id==id);
        setData(movieT);

    },[id]

    )
  return (
    
    <div className='ccc'>
      <iframe src={data.trailer} title="Trailer" allowFullScreen width="1340px" height="500px"/>
    </div>
    
  )
}

export default Trailer
