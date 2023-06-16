import React from 'react'

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieCard.css'
import MovieRating from '../Rating/Rating';
import { useNavigate } from 'react-router-dom';



const MovieCard = ({movie}) => {
  const navigate= useNavigate();
  return (
    <div className='movie-card' style={{marginRight:'20px'}}>
        <Card style={{width:'18rem',margin:"30px auto"}}>
      <Card.Img className="top" src={movie.posterUrl}/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text className='desc'>
          {movie.description}
        </Card.Text>
        <MovieRating movieRating={movie.rate} isMovieRating={true}/> {/* il suffit d5alt lil page hethi ma3neha raho film*/} 
      </Card.Body>
      <button className='click' onClick={()=>navigate (`/Description/${movie.id}`)}>Description </button>
      <button className='click1'onClick={()=>navigate(`/Trailer/${movie.id}`)}>Trailer</button>
    </Card>
    </div> 
  )
}

export default MovieCard
