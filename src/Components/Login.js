import React, { useState,useEffect } from 'react'

const RegistrationForm = () => {
  const initialvalues={username:"",email:"" ,password:""};
  const[data,setData] =useState(initialvalues);
  const[error,setError] =useState({});
  const[isSubmit,setIsSubmit] =useState(false);

  const handlesubmit = (e) =>{
    e.preventDefault();
    setError(validate(data));
    setIsSubmit(true)
  }
  const click=(e) =>{
    setData(e.target.value)
    console.log(e.target.value);
    const {name,value}=e.target;
    setData({...data,[name]:value});
    console.log(data);
  }
  useEffect(()=>{
    console.log(error)
    if(Object.keys(error).length===0 && isSubmit ){
      console.log(data);
    }
  })
  const validate = (values) =>{
    const errors={};
    const regex=/^[^\s@]+@[^\s$]+$/;
    if(!values.username){
      errors.username= <p style={{color:'red'}}> username required </p>
    }
    if(!values.email){
      errors.email=<p style={{color:'red'}}> email is required </p>
    } else if(!regex.test(values.email)){
      errors.email=<p style={{color:'red'}}> email is required </p>

    }
    if(!values.password){
      errors.password=<p style={{color:'red'}}> password is required </p>
    }
    return errors;
  }
  return (
    <div className="container  col-md-6">
      <form onSubmit={handlesubmit} >
      <center>
      <div className=' col-md-6 mr-2 mt-5 bg-info text-center' >
        
        <div className="uideveloper ">

        </div>
       
        <div className="field">
          <label htmlFor="">Username</label> <br />
          <input className='pre'  type="text" name="username" id="" value={data.username} onChange={click} placeholder='username' />
        </div>
        <p>{error.username}</p>
        <div className="field">
          <label htmlFor="">email</label> <br />
          <input className='pre' type="email" name="email" id="" value={data.email} onChange={click} placeholder='email' />
        </div>
        <p>{error.email}</p>
        <div className="field">
          <label htmlFor="" className='label'>password</label> <br />
          <input className='pre'  type="password" name="password" value={data.password} onChange={click} id="" placeholder='password' />
        </div>
        <p>{error.password}</p>

        <div>
         <button className='btn btn-primary mb-2'>submit</button>
           
        </div>
  
     
        </div>
        </center>
       
      </form>
    </div>
  )
}

export default RegistrationForm