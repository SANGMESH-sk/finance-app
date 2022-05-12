import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import Carasoul from './Components/Carasoul';
import Signup from './Components/Signup';
import Login from './Components/Login'
import Home from './Components/Home'
import { Route, Routes } from "react-router-dom";
import Services from './Components/Services';
import { useState } from 'react';
import Axios from './Components/Axios';
import GetAxios from './Components/GetAxios';
import Footer from './Components/Footer';
import Addstudent from './Students/Addstudent';

import CardMap from './Components/CardMap';
import Edit from './Students/Edit';
import Alert from './Components/Alert';
import search from './Components/Search';
import User from './Students/User';


function App() {
  const [mode, setmode] = useState('light'); //wether dark mode enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert =(messege,type) =>{
    setAlert({
      msg:messege,
      type:type
    })
  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
    } else {
      setmode('light')
    }
  }

  return (
    <div className="">
      <Navbar mode={mode} togglemode={togglemode} />
      <Routes>
       
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login  />} />
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services mode={mode} togglemode={togglemode}  />} />
        <Route path="axios" element={<Axios />} />
        <Route exact path='/student' element={<Addstudent />} />
        <Route exact path='/edit/:id' element={<Edit />} />
        <Route exact path='/user/:id' element={<User />} />

      </Routes>
    </div>
  );
}

export default App;
