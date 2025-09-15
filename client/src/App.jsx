import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import RefrshHandler from './RefrshHandler';


const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  return (
    <div>
      <BrowserRouter>
        <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<PrivateRoute element={<Home />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App