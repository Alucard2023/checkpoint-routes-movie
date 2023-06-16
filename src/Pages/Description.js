import React, { useEffect, useState } from 'react'
import { useParams, } from 'react-router-dom';
import { moviesData } from '../constant/Data';
import'./Description.css';

const Description = () => {
    const[Descrip,setDescrip]=useState({});
    const{id}=useParams();
    useEffect(()=>{
        const movieD=moviesData.find((el)=>el.id==id);
        setDescrip(movieD);
    }


    )
  return (

    <div className='des'>
      <h1>{Descrip.description}</h1>
    </div>
  )
}

export default Description
