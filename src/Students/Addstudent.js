import React from 'react';  
import axios from 'axios';  

import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addstudent extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
Name:'',  
Email:'',  
Gender:'',  
Username:''  ,
Password:''
}  
 }  // https://localhost:44317/Help/Api/GET-api-UserRegistrations
Addstudent=()=>{  
  axios.post('https://localhost:44317/api/UserRegistrations', {Name:this.state.Name,Email:this.state.Email,  
  Gender:this.state.Gender, Username:this.state.Username, Password:this.state.Password})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/Studentlist')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/Studentlist')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Student Informations</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="Name" sm={2}>Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="email" sm={2}>Email</Label>  
          <Col sm={10}>  
            <Input type="email" name="Email" onChange={this.handleChange} value={this.state.Email} placeholder="Enter email" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Gender" sm={2}>Gender</Label>  
          <Col sm={10}>  
            <Input type="text" name="Gender" onChange={this.handleChange} value={this.state.Gender} placeholder="Enter gender" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Username" sm={2}>Username</Label>  
          <Col sm={10}>  
            <Input type="text" name="Username" onChange={this.handleChange} value={this.state.Username} placeholder="Enter username" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Password" sm={2}>Address</Label>  
          <Col sm={10}>  
            <Input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="Enter password" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addstudent} className="btn btn-success">Submit</button>  
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
   
}  
   
export default Addstudent;  