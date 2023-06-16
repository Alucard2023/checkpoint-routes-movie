import React from 'react'
import Navbarr from '../Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Trailer from './Trailer'
import Description from './Description'
import Error from './Error'
import Home from './Home'

const MovieRouter = () => {
  return (
    <div>
      <Navbarr/>
      <Routes>
        <Route exact path='/' element={<App/>} />
        <Route exact path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/*' element={<Error/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Trailer/:id' element={<Trailer/>}/>
        <Route path='/Description/:id' element={<Description/>}/>
        





      </Routes>
    </div>
  )
}

export default MovieRouter
