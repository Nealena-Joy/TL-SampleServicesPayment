import React, {Component} from 'react';
import '../../App.css';
import APIURL from '../helpers/environment';
import { Button, Container, Form} from 'react-bootstrap';


export default class RegisterUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            passwordRetype: '',
            userRole: '',
            SignUpError: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        //console.log(this.state)

        fetch(`${APIURL}/register`,{
            method: 'POST',
            body: JSON.stringify({user: this.state}),
            headers: new Headers({'Content-Type': 'application/json'})
        })
        .then((response) => response.json()) 
        .then((json) => {
            console.log("Here: " + json);
            let token = json.Session_Token;
            let userRole = json.UserDetails.userRole;
            let firstName = `${json.UserDetails.firstName}`;
            let lastName = `${json.UserDetails.lastName}`;
            let username = `${json.UserDetails.username}`;
            let userID = `${json.UserDetails.id}`

            localStorage.setItem('token', token);
            localStorage.setItem('userRole', userRole);
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('username', username);
            localStorage.setItem('userID', userID);
            window.location.href = `/`;
        })
        .catch(error => {
            console.log("Sign Up Error:", error)
            this.setState({
                SignUpError: "Username/Email already in use."
            })
        })
    };

    render() {
        return (
            <Container>
                <p style={{color:"red",textAlign:"center",verticalAlign:"middle",height:"30px"}}>
                    {this.state.SignUpError}
                </p>
                <Form onSubmit={this.handleSubmit} style={{margin:"30px"}}>
                    <Form.Group>
                        <Form.Label>Choose your account type:</Form.Label>
                        <br/>
                        <div key="inline-radio" className="mb-3" style={{display:"inline-flex"}}>
                        <Form.Check type="radio" label="Player" name="userRole" id="inline-radio-1" required
                            onChange={(event)=>this.setState({userRole: event.target.value})} 
                            style={{marginRight:"30px"}}
                            value="Player" 
                            />
                        <Form.Check type="radio" label="Coach" name="userRole" id="inline-radio-2" required
                            onChange={(event)=>this.setState({userRole: event.target.value})}
                            value="Coach" 
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required type="text" placeholder="First name" name="firstName" value={this.state.firstName}
                        onChange={(event)=>this.setState({firstName: event.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required type="text" placeholder="Last name" name="lastName" value={this.state.lastName}
                        onChange={(event)=>this.setState({lastName: event.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required type="email" placeholder="Email" name="username" value={this.state.username}
                        onChange={(event)=>this.setState({username: event.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control required type="password" placeholder="Password" name="password" value={this.state.password}
                        onChange={(event)=>this.setState({password: event.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control required type="password" placeholder="Re-Type Password" name="passwordRetype" value={this.state.passwordRetype}
                        onChange={(event)=>this.setState({passwordRetype: event.target.value})}/>
                    </Form.Group>
                
 
                <Button variant="success" type="submit" style={{borderRadius:"50px",width:'50%'}}>
                    Sign Up
                </Button>
            </Form>
            </Container>
        )
    }
}