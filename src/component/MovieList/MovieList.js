import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

const MovieList = ({movies,inputSearch,Rating}) => { 
  return (
    <div className='list'>
      {movies
      .filter(movie => movie.title.toLowerCase().includes(inputSearch.toLowerCase())
      &&
      movie.rate >= Rating                                   /*filtrage par stars*/
      )                                                                                         /* cette forme toLowerCase ou toUppercase elle met inputsearch 
                                                                                                  et les titres des film en meme forme ya majiscule ya miniscule*/
      .map((movie)=> <MovieCard movie={movie} key={movie.id} /> ) } 
                                                                                      {/*.map toute la liste one by one bch nab3tho props lil
                                                                                       moviecard wl key movie.id identifiant de chaque film*/}
      
    </div>
  )
}

export default MovieList
