import React, {Component} from 'react';
import '../../App.css';
import {Container, Navbar, Nav, Offcanvas, NavDropdown} from 'react-bootstrap';
import Logo from '../assets/TennisLab-Logo.png';


export default class NavbarTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginError: '',
            show: '0',
            isLoggedIn: false
        };
    };

    render() {
        return(
            <Navbar expand="sm" fixed="top" style={{backgroundColor:'#008fc373'}}>
                <Container>
                    <Navbar.Brand href='#services'>
                        <img alt="sports" src={Logo} height="30" className="d-inline-block align-top"/>
                    </Navbar.Brand>
                    <Navbar.Offcanvas id="offcanvasNavbar-expand" placement="end" style={{backgroundColor:'#008fc3',width:'30vh'}} >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title style={{color: 'whitesmoke'}}>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='me-auto NavbarTop'>
                                <Nav.Link style={{color: 'whitesmoke'}} href='#services'>Services</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Navbar.Toggle aria-controls='offcanvasNavbar-expand-false' />
                </Container>
            </Navbar>
        )
    };
}

/**
 * fixed vs sticky
 * Update link contents on App.js
 */