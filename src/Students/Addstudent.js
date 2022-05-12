import React, { useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';



import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

const Addstudent = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Gender: '',
    Username: '',
    Password: ''
  }
  )
  const { Name, Email, Gender, Username, Password } = user
// https://localhost:44317/Help/Api/GET-api-UserRegistrations
// Addstudent = () => {
//   axios.post('https://localhost:44317/api/UserRegistrations', {
//     Name: this.state.Name, Email: this.state.Email,
//     Gender: this.state.Gender, Username: this.state.Username, Password: this.state.Password
//   })
//     .then(json => {
//       if (json.data.Status === 'Success') {
//         console.log(json.data.Status);
//         alert("Data Save Successfully");
//         this.props.history.push('/Studentlist')
//       }
//       else {
//         alert('Data  Saved');
//         debugger;
//         this.props.history.push('/');
//       }
//     })
// }

const handleChange = (e) => {
  setUser({...user, [e.target.name]: e.target.value });
};
const onSubmit =async (e) =>{
  e.preventDefault();
  await axios.post('https://localhost:44317/api/UserRegistrations', user);
  alert('data submited successfully');
  navigate('/services');

}
return (
  <Container className="App">
    <div className=''>

    </div>
    <h4 className="PageHeading">Enter Insurence Informations</h4>
    <Form className="form" >
      <Col>
        <FormGroup row>
          <Label for="Name" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="text" name="Name" onChange={e => handleChange(e)} value={Name} placeholder="Enter Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="Email" onChange={e => handleChange(e)} value={Email} placeholder="Enter email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Gender" sm={2}>Gender</Label>
          <Col sm={10}>
            <Input type="text" name="Gender" onChange={e => handleChange(e)} value={Gender} placeholder="Enter gender" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Username" sm={2}>Username</Label>
          <Col sm={10}>
            <Input type="text" name="Username" onChange={e => handleChange(e)} value={Username} placeholder="Enter username" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Password" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="Password" name="Password" onChange={e => handleChange(e)} value={Password} placeholder="Enter password" />
          </Col>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup row>
          <Col sm={5}>
          </Col>
          <Col sm={1}>
            <button type="button" onClick={e=> onSubmit(e)} className="btn btn-success">Submit</button>
          </Col>
          <Col sm={1}>
            <Button color="danger">Cancel</Button>{' '}
          </Col>
          <Col sm={5}>
          </Col>
        </FormGroup>
      </Col>
    </Form>
  </Container>
);
  

}

export default Addstudent;  