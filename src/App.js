import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import Carasoul from './Components/Carasoul';
import Signup from './Components/Signup';
import Login from './Components/Login'
import Home from './Components/Home'
import { Route, Routes } from "react-router-dom";
import Services  from './Components/Services';
import { useState } from 'react';
import Axios from './Components/Axios';
import GetAxios from './Components/GetAxios';
import Footer from './Components/Footer';
import Addstudent from './Students/Addstudent';  
import CardMap from './Components/CardMap';

function App() {
  const[mode,setmode]=useState('danger'); //wether dark mode enabled or not
  const togglemode=()=>{
    if(mode==='danger'){
      setmode('dark')
    }else{
      setmode('danger')
    }
  }

  return (

    <div className="">
      
     <Navbar mode={mode} togglemode={togglemode} />
     
   
      <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home/>} />
          <Route path="services" element={<Services/>} />
          <Route path="axios" element={<Axios/>} />
          <Route exact path='/Addstudent' element={<Addstudent/>} />
        </Routes> 
    </div>
  );
}

export default App;
