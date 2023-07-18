import React, {Component} from 'react';
import '../../App.css';
import {Form, Button} from 'react-bootstrap';
import APIURL from '../helpers/environment';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginError: '',
            show: '0',
            Authenticated: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    //!  LOGIN
    handleSubmit(e) {
        e.preventDefault();
        console.log("USERNAME: " + this.state)

        fetch(`${APIURL}/auth/login`,{
            method: 'POST',
            body: JSON.stringify({user: this.state}),
            headers: new Headers({'Content-Type': 'application/json'})
        })
        .then((response) => response.json())
        .then((json) => {
            console.log("Here: " + json);
            let TOKEN = `${json.Session_Token}`;
            let USER_ROLE = `${json.UserDetails.USER_ROLE}`;
            let FIRST_NAME = `${json.UserDetails.FIRST_NAME}`;
            let LAST_NAME = `${json.UserDetails.LAST_NAME}`;
            let USERNAME = `${json.UserDetails.USERNAME}`;
            let ID = `${json.UserDetails.ID}`
            
            localStorage.setItem('TOKEN', TOKEN);
            localStorage.setItem('USER_ROLE', USER_ROLE);
            localStorage.setItem('FIRST_NAME', FIRST_NAME);
            localStorage.setItem('LAST_NAME', LAST_NAME);
            localStorage.setItem('USERNAME', USERNAME);
            localStorage.setItem('ID', ID);
            window.location.href = `/home`;
   
        })
        .catch((error) => {
            console.log("Login Error:", error)
            this.setState({
                loginError: "Incorrect username/email or password. Please try again."
            })
        })
    };

    

    render () {
        return (
        <div className="Login" style={{backgroundColor:'#282c34'}}>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="" align="left">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control name="USERNAME" type="email" placeholder="name@example.com" onChange={(e)=>this.setState({USERNAME: e.target.value})}/>       
                </Form.Group>
                    <Form.Group className="mb-3" controlId="" align="left" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="PASSWORD" type="password" rows={3} onChange={(e)=>this.setState({PASSWORD: e.target.value})}/>   
                </Form.Group>
                <Button variant="success" type='submit' style={{align: "right"}}>LOG IN</Button>
            </Form>
        </div>
        )
    };
}


/* 

In form fields, USERNAME must match exact to "name" prop (cannot be name=USERNAME, but this.setState=username)
Try using session storage instead of local storage to 

*/