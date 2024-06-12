import React, { useState } from 'react'
import {
   BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

import Signin from './components/userauth/Signin';
import Signup from './components/userauth/Signup';

function App() {
  return (
    <div className='h-screen w-screen flex flex-col justify-start items-center'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
