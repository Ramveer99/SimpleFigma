import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Auth from '../src/Pages/Auth/Auth'
import Home from '../src/Pages/Home/Home'
import Boxe from '../src/Component/Navbar/Box/Box'

function AllRoter() {
  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/' element={<Boxe />}  />
      
    </Routes>

  )
}

export default AllRoter