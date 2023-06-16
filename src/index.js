import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MovieCard from './component/MovieCard/MovieCard';
import MovieRouter from './Pages/MovieRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
   <MovieRouter/>
  </React.StrictMode>
  </BrowserRouter>
);

