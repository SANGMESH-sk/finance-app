import react, { useEffect,useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

const User = () => {
    const [user, setUser] = useState({
        Name: '',
        Email: '',
        Gender: '',
        Username: '',
        Password: ''
    }
    )
    const { id } = useParams();
    const loadUser = async () => {
        const response = await axios.get(`https://localhost:44317/api/UserRegistrations/${id}`);
        setUser(response.data)
    }
    useEffect(()=>{
        loadUser()
    })
    return (
        <div>
            <div className='container'>
                <h1 className='display-4'>userid{user.id}</h1>
                <hr/>
                <ul className='list-group w-50'>
                    <li className='list-group-item'>user Name : {user.Name}</li>
                    <li className='list-group-item'>user Email : {user.Email}</li>
                    <li className='list-group-item'>user Gender : {user.Gender}</li>
                    <li className='list-group-item'>user Username : {user.Username}</li>
                    <li className='list-group-item'>user Password : {user.password}</li> 
                </ul>
                <Link className="btn btn-outline-danger m-2 " to="/services">Back </Link> 
            </div>
        </div>
    )
}
export default User;