import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            username:"",
            password:""
        }
    }
    submitLogin = (e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post("/login",this.state)
        .then(res=>{
            console.log("Response", this.state)
        })
    }
    onChangeData=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        e.preventDefault();
    }

    render() {
        return (<div>
            <Container>
                <Jumbotron>
                    <h1>Login</h1>
                </Jumbotron>
                <center>
                    <Form method="POST" onSubmit={this.submitLogin}>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Control type="text"  placeholder="Enter Username" onChange={this.onChangeData} name="username" style={{ width: "300px" }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChangeData} style={{ width: "300px" }} />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Login
        </Button>
                    </Form>
                </center></Container>
        </div>)
    }
}
export default Login;