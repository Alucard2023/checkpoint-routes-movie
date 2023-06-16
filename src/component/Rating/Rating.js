import { Rate } from 'antd';
import React from 'react'
import'./Rating.css';


const stars=['terrible','bad','good','wonderful'];
const Rating = ({movieRating,Rating,setRating,isMovieRating}) => {
    const handlechange=value =>{         
        setRating(value);
    };
  return (
    <div>
        {isMovieRating ?                                                                                               
    <span className='ratingcontent'>            
    <Rate disabled value={movieRating}/>
    </span>
    :
    <span className='ratingcontent'>
    <Rate tooltips={stars} on onChange={handlechange} value={Rating}/>                           {/*else:timchili lil recherche wta3tini stars et a9rali handlechange avec la valeur Rating  */}
    </span>
}
    </div>
  )
}

export default Rating
