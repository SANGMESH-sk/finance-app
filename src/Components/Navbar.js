import react, { useState } from 'react';
import { Link } from "react-router-dom";


const Navbar = (props) => {
  const [mode,setmode]=useState('light');


  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar- bg-${props.mode} `}>
      <img className='img-fluid' src="https://www.maxlifeinsurance.com/static-page/assets/homepage/maxlogo.svg" style={{width:'100px',marginLeft:'30px'}} />
        <button className="navbar-toggler navbar-default " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                <Link to={'/student'} className="nav-link">Add Insurence</Link>  
              </li>  
            <li className="nav-item">
              <Link activeClassname="menu_active" className="nav-link" to="axios">Customers</Link>
              
            </li>
            <li className="nav-item">
              <Link activeClassname="menu_active" className="nav-link" to="login">Login</Link>
            </li>
            <li className="nav-item">
              <Link activeClassname="menu_active" className="nav-link" to="signup">Signup</Link>
            </li>
            <div className="form-check form-switch mr-auto">
            <input className="form-check-input mr-auto" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
            
          </div>

          </ul>
         

        </div>
    
      </nav>
    </div>
  )
}
export default Navbar;