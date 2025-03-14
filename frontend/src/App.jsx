import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import backgroundImage from './assets/abstract-wavy-background_53876-99232.jpg';
import Login from './Components/Login'
function App(){
  return (
    <div className="min-h-screen w-screen flex flex-col bg-cover bg-center opacity-80" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <Navbar></Navbar>
        <Routes>
        <Route path="/about" element={<About />} />
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/login' element={<Login></Login>}></Route>
        </Routes>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
