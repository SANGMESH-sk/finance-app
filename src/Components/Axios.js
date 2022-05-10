import axios from 'axios';
import react, { useEffect, useState } from 'react';
import GetAxios from "./GetAxios"

const Axios=()=>{
    
    const[num,setNum]=useState();
    const [name,setname] = useState();
  
    return(
        <div>
            <h1>you choose {num}  value my name is {name}</h1>
            <h1>you choose {num} value</h1>
            
            <select value={num} onChange={(e)=>{
                setNum(e.target.value)
            }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="25">25</option>
            </select>
       <GetAxios></GetAxios>
        </div>
    )

}
export default Axios;