import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'

function App(){
  return (
    <div>
      <Navbar></Navbar>
      <Footer></Footer>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
        </Routes>
    </div>
  )
}

export default App
