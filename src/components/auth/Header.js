import React, {Component} from 'react';
import '../../App.css';
import {Navbar, Nav} from 'react-bootstrap';
import AST from '../assets/AST_no_background.png';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginError: '',
            show: '0',
            isLoggedIn: false
        };
        this.handleLogout = this.handleLogout.bind(this);
    };

    handleLogout(){
        localStorage.clear();
        //  Set isLoggedIn as FALSE
        this.setState({isLoggedIn: false});
        window.location.href = '';
    }

    render() {
        return(
            <Navbar bg="success" data-bs-theme="dark" fixed="top" sticky="top">
                <Nav>
                    <Navbar.Brand href='/home' style={{paddingLeft:'10px'}}>
                        <img
                            alt=""
                            src={AST}
                            height="25"
                            className="d-inline-block align-top"
                            />
                    </Navbar.Brand>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link style={{color:'whitesmoke',fontSize:'12px'}} onClick={this.handleLogout}>Logout</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    };
}

/**
 * fixed vs sticky
 */