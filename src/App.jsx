import './App.css'
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"

// import { useState , useEffect } from 'react';
import { Routes, Route, Navigate, } from 'react-router-dom';

function App() {

  
  

  return (
   <Routes>
    <Route path="/" element={<Navigate to="/Login"/>} />
    <Route path="/Signup" element={<SignUp/>} />
    <Route path="/Login" element={<Login/>}/>
    </Routes>
  )
}

export default App
