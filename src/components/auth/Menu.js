import React from 'react';
import '../../App.css';
import {Container, Navbar} from 'react-bootstrap';
import Icon_Rank from '../assets/star.svg';
import Icon_Match from '../assets/racket.svg';
import Icon_Add from '../assets/add2.svg';
import Icon_Profile from '../assets/profile.svg';


export default class Menu extends React.Component {
    
    render() {
        return(
            <Container style={{padding:'0'}}>
                <Navbar className="justify-content-center" bg="dark" data-bs-theme="dark">
                    <Navbar.Brand href="/rankings">
                        <img 
                            alt="Rankings"
                            src={Icon_Rank}
                            width="20"
                            height="20"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="/match/records">
                        <img
                            alt="MatchRecords"
                            src={Icon_Match}
                            width="20"
                            height="20"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="/profiles">
                        <img
                            alt="Profiles"
                            src={Icon_Profile}
                            width="20"
                            height="20"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="match/add">
                        <img
                            alt="Add"
                            src={Icon_Add}
                            width="20"
                            height="20"
                        />
                    </Navbar.Brand>
                </Navbar>
            </Container>
        )
    };
};

/*

*/