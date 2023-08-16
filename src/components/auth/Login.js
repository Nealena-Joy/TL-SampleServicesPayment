import React, {Component} from 'react';
import '../../App.css';
import {Form, Button, Container, Modal, Spinner} from 'react-bootstrap';
import APIURL from '../helpers/environment';
import RegisterUser from '../auth/RegisterUser';
import AST from '../assets/AST_no_background.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginError: '',
            show: false,
            Authenticated: false,
            loggedInState: '',
            showLoginModal: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

    };

    //!  LOGIN
    handleSubmit(e) {
        e.preventDefault();
        // console.log("USERNAME: " + this.state)

        this.setState({loggedInState: 'logging in'})

        fetch(`${APIURL}/auth/login`,{
            method: 'POST',
            body: JSON.stringify({user: this.state}),
            headers: new Headers({'Content-Type': 'application/json'})
        })
        .then((response) => response.json())
        .then((json) => {
            // console.log("Here: " + json);
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
            window.location.href = `/`;   
        })
        .catch((error) => {
            // console.log("Login Error:", error)
            this.setState({
                showLoginModal: true,
                loginError: "Incorrect username/email or password. Please try again.",
                loggedInState: ''
            })
        })
    };

    //!  TOGGLE SIGN UP MODAL
    handleShow(e) {
        this.setState({show: true})
    }

    handleClose(e) {
        this.setState({show: false, showLoginModal: false})
    }


    render() {
        return(
            <div className="Login" style={{backgroundColor:'#282c34'}}>
                <Container style={{display:'flex',justifyContent:'center',margin:'15px'}}>
                    <img alt="AST" src={AST} height="50"/>
                </Container>

                <Container style={{width:'80%'}}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="" align="left">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control required name="USERNAME" type="email" placeholder="name@example.com" onChange={(e)=>this.setState({USERNAME: e.target.value})}/>       
                        </Form.Group>
                            <Form.Group className="mb-3" controlId="" align="left" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control required name="PASSWORD" type="password" rows={3} onChange={(e)=>this.setState({PASSWORD: e.target.value})}/>   
                        </Form.Group>
                        <Container style={{display:'flex',justifyContent:'center'}}>
                            {this.state.loggedInState === 'logging in' ? <Spinner/> : <Button variant="success" type='submit' style={{borderRadius:"50px",width:'50%'}}>LOG IN</Button>}
                        </Container>
                    </Form>
                </Container>

                {/* LOGIN MODAL */}
                <Modal show={this.state.showLoginModal} onHide={this.handleClose} backdrop='static'>
                    <Modal.Body><Container>{this.state.loginError}{' '}<Button size='sm' onClick={this.handleClose}>X</Button></Container></Modal.Body>
                </Modal>

                {/* REGISTER MODAL */}
                <Container style={{margin:'50px',textAlign:'center',textDecoration:'underline'}}>
                    <p onClick={this.handleShow}>Register</p>
                </Container>

                <Modal show={this.state.show} fullscreen onHide={this.handleClose}>
                    <Modal.Header closeButton>Registration</Modal.Header>
                    <Modal.Body><RegisterUser/></Modal.Body>
                </Modal>
            </div>
        )
    };
}


/* 

In form fields, USERNAME must match exact to "name" prop (cannot be name=USERNAME, but this.setState=username)
Try using session storage instead of local storage to 

*/