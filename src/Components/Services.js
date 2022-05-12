
import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const Services = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchdata()

  }, [])
  const fetchdata = async () => {
    const response = await axios.get("https://localhost:44317/api/UserRegistrations");
    setData(response.data)
  }

  const deleteuser = async (id) => {
    await axios.delete(`https://localhost:44317/api/UserRegistrations/${id}`);
    fetchdata()
  }
  const [mode, setmode] = useState('light');
  return (
    <>
      <div className='container-fluid mb-5'>

    
        <div>
          <h1 className='text-center'>Customers who’ve trusted Max Life Insurance</h1>
        </div>
        <table className={`table border shadow table-bordered text-center  ${props.mode}`}>
          <thead className='table-dark' >
            <tr>
              <th scope="col">Id</th>
              <th scope="col">FirstName</th>
              <th scope="col">email</th>
              <th scope="col">Gender</th>
              <th scope="col">Username</th>
             
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x, index) => (
              <tr>
                <th scope="row">{index + 1} </th>
                <td>{x.Name}</td>
                <td>{x.Email}</td>
                <td>{x.Gender}</td>
                <td>{x.Username}</td>
                
                <td>
                  <Link className='btn btn-outline-primary m-2 ' to={`/user/${x.id}`}>view</Link>
                  <Link className='btn btn-outline-warning m-2' to={`/edit/${x.id}`} >edit</Link>
                  <button className='btn btn-outline-danger' onClick={(e) => deleteuser(x.id)}>delet</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  )

}
export default Services;
