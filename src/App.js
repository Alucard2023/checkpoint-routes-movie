

import { useState } from 'react';
import './App.css';
import {moviesData} from './constant/Data'
import MovieList from './component/MovieList/MovieList';
import FilterbyName from './component/FilterbyName/FilterbyName';
import FilterbyRate from './component/Rating/Rating';
import Addmovie from './component/Addmovie/Addmovie';


function App() {
 const [movies,setmovies]=useState(moviesData) /*initialisation d'appeler datalist a app.js */ 
 const[inputSearch,setinputSearch]=useState("") /*initialisation de la barre de recherche */
 const[Rating,setRating]=useState("1")            /*initialisation de filter by rate*/
 const add=(newMovie)=> {
  setmovies ([...movies,newMovie]) 

}

  return (
    <div className="App">

      <FilterbyName inputSearch={inputSearch} setinputSearch={setinputSearch}/>
      <FilterbyRate isMovieRating={false} Rating={Rating} setRating={setRating}/>    {/*ismovierate toujour false bch ntesti biha est ce que rate(star) mta3 film walla mta3 filtragebyrate
                                                                                                          ,rate ,setrate props fil rating}*/}

      <MovieList movies={movies} inputSearch={inputSearch} Rating={Rating} />      {/*bech nab3ath props lil movieliste esmha movies fi west'ha moviedata                                                             inputsearch props bch n3aytelha fil movielist 5ater fil recherche  ki n7ot title yemchi direct lil movielist ylawwej   */}
      <Addmovie add={add}/>

    </div>
  );
}

export default App;
