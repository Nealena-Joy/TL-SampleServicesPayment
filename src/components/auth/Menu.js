import React from 'react';
import '../../App.css';
import {Container, Navbar} from 'react-bootstrap';
import Icon_Rank from '../assets/star.svg';
import Icon_Match from '../assets/racket.svg';
import Icon_Add from '../assets/add2.svg';
import Icon_Profile from '../assets/profile.svg';
import { Link } from 'react-router-dom';



export default class Menu extends React.Component {
    
    render() {
        return(
            <Container>
            <Navbar className="justify-content-center" fixed="bottom" bg="dark" data-bs-theme="dark">
                <Navbar.Brand href="/dashboard" style={{fontSize:'12px',alignItems:'center'}}>
                    <Container>
                        <img 
                            alt=""
                            src={Icon_Rank}
                            width="30"
                            height="30"
                            className="d-inline-block align-top menu-icon"
                        />
                        <p style={{textAlign:"center"}}>Rankings</p>
                    </Container>
                    
                </Navbar.Brand>
                <Navbar.Brand href="/match-records" style={{fontSize:'12px',justifyContent:'center'}}>
                    <Container>
                        <img
                            alt=""
                            src={Icon_Match}
                            width="30"
                            height="30"
                            className="d-inline-block align-top menu-icon"
                        />
                        <p style={{textAlign:"center"}}>Matches</p>
                    </Container>
                    
                </Navbar.Brand>
                <Navbar.Brand href="/match-records" style={{fontSize:'12px',justifyContent:'center'}}>
                    <Container>
                        <img
                            alt=""
                            src={Icon_Profile}
                            width="30"
                            height="30"
                            className="d-inline-block align-top menu-icon"
                        />
                        <p style={{textAlign:"center"}}>Profiles</p>
                    </Container>
                    
                </Navbar.Brand>
                <Navbar.Brand href="more" style={{fontSize:'12px'}}>
                    <Container>
                        <img
                            alt=""
                            src={Icon_Add}
                            width="30"
                            height="30"
                            className="d-inline-block align-top menu-icon"
                        />
                        <p style={{textAlign:"center"}}>More</p> 
                    </Container>
                    
                </Navbar.Brand>
            </Navbar>
            </Container>
        )
    };
};

/*

*/