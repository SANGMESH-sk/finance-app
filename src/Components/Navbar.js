import react, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [mode,setmode]=useState('light');


  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar- bg-${props.mode} `}>
        <a className="navbar-brand " to="#">MAX LIFE INSURENCE</a>
        <button className="navbar-toggler navbar-default" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  navbar-floating " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto  ">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home </Link>
            </li>
            <li className="nav-item ">
              <Link activeClassname="menu_active" className="nav-link" to="services">service</Link>
            </li>
            <li className="nav-item">  
                <Link to={'/Addstudent'} className="nav-link">Addstudent</Link>  
              </li>  
            <li className="nav-item">
              <Link activeClassname="menu_active" className="nav-link" to="axios">services</Link>
              
            </li>
            <li className="nav-item">
              <Link activeClassname="menu_active" className="nav-link" to="login">Login</Link>
            </li>
            <li className="nav-item">
              <Link activeClassname="menu_active" className="nav-link" to="signup">Signup</Link>
            </li>
            <div className="form-check form-switch mr-auto">
            <input className="form-check-input mr-auto" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
            <label className="form-check-label" htmlfor="flexSwitchCheckDefault"style={{color:'black'}}>Enable Dark Mode</label>
          </div>

          </ul>
         

        </div>
    
      </nav>
    </div>
  )
}
export default Navbar;