import React, {Component} from 'react';
import '../../App.css';
import {Container, Navbar, Nav, Offcanvas} from 'react-bootstrap';
import AST from '../assets/AST_no_background.png';


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
            <Navbar expand="sm" fixed="top" sticky="top" bg='success'>
                <Container>
                    <Navbar.Brand href='/'>
                        <img alt="AST" src={AST} height="25" className="d-inline-block align-top"/>
                    </Navbar.Brand>
                    <Navbar.Offcanvas id="offcanvasNavbar-expand" placement="end" >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='me-auto NavbarTop'>
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link href='/rankings'>Rankings</Nav.Link>
                                <Nav.Link href='/match/records'>Match Results</Nav.Link>
                                <Nav.Link href='/players'>Profiles</Nav.Link>
                                <Nav.Link href='/Feedback'>Feedback</Nav.Link>
                                <Nav.Link className="justify-content-end" onClick={this.handleLogout}>Logout</Nav.Link> 
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
 */