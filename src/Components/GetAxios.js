import react, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Get = () => {
  const [data, setData] = useState([])
  useEffect(() => {
  
    fetchdata()
  }, [])
  const fetchdata = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(response.data)
  }

  const deleteuser = async id => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/3`);
    console.log('hello')
    
    fetchdata()
  }
  return (
    <div>
       <h1 className='text-center'>list of OLD Customers</h1>
      <div>
      
      
        <table className="table border shadow table-bordered text-center ">
          <thead className='table-dark' >
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First</th>
              <th scope="col">email</th>
              <th scope="col">city</th>
              <th scope="col">zipcode</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x, index) => (
              <tr>
                <th scope="row">{index + 1} </th>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.address.city}</td>
                <td>{x.address.zipcode}</td>
                <td>
                  <Link activeClassname="menu_active" className="nav-link" to="services">service</Link>
                  <button className='btn btn-outline-primary m-2 '   >view</button>
                  <button className='btn btn-outline-warning m-2' >edit</button>
                  <button className='btn btn-outline-danger' onClick={() => deleteuser(data.id)}>delet</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Get;