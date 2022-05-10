import react, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Get = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(response.data)
    }
    fetchdata()
  }, [])

  const deleteuser = async id => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log('hello')
  }
  return (
    <div>
      <h1>list of users</h1>
      <div>
        <h1>List of Users</h1>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
          Launch demo modal
        </button>
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

                <div className="form-group">
                  <label for="exampleInputPassword1">Username</label>
                  <input type="text" className="form-control" id="exampleInputPassword1" name='name' value={data.name} onChange={InputEvent} placeholder="username" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">mobile no</label>
                  <input type="phone" className="form-control" name='mobile' onChange={InputEvent} value={data.mobile} id="exampleInputPassword1" placeholder="mobile no" />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={data.email} onChange={InputEvent} aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" name='password' value={data.password} onChange={InputEvent} id="exampleInputPassword1" placeholder="Password" />
                </div>


              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <table className="table border shadow ">
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
                  <button className='btn btn-outline-primary ml-2 '   >view</button>
                  <button className='btn btn-outline-warning mr-2' data-toggle="modal" data-target="#exampleModalCenter">edit</button>
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