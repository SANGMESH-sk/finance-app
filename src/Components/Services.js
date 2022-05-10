
import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Services = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchdata()

  }, [])
  const fetchdata = async () => {
    const response = await axios.get("https://localhost:44317/api/UserRegistrations");
    setData(response.data)
  }

  const deleteuser = async Name => {
    await axios.delete(`https://localhost:44317/api/UserRegistrations/${Name}`);
    fetchdata()
  }
  return (
    <>
      <div className='container-fluid mb-5'>

        <table className="table border shadow ">
          <thead className='table-dark' >
            <tr>
              <th scope="col">Id</th>
              <th scope="col">FirstName</th>
              <th scope="col">email</th>
              <th scope="col">Gender</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
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
                <td>{x.password}</td>
                <td>

                  <button className='btn btn-outline-primary ml-2 '>view</button>
                  <button className='btn btn-outline-warning mr-2' data-toggle="modal" data-target="#exampleModalCenter">edit</button>
                  <button className='btn btn-outline-danger' onClick={() => deleteuser(data.Name)}>delet</button>
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