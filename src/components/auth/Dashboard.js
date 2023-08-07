import React from 'react';
import '../../App.css';
import Icon_Rank from '../assets/star.svg';
import Icon_Racket from '../assets/racket.svg';
import Icon_Add from '../assets/add2.svg';
import Icon_Profile from '../assets/profile.svg';
import { Button, Container } from 'react-bootstrap';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const FIRST_NAME=localStorage.getItem('FIRST_NAME');
        
        return (
            <div>
                <div style={{backgroundColor:'blue',padding:'10% 0'}}>
                    <Container>Welcome, Coach {FIRST_NAME}!</Container>
                </div>
                <div>
                    <Container>
                        <div>Latest Matches</div>
                        <div>*** Matches Here ***</div>
                    </Container>
                </div>
                <div>
                    <Container className="d-grid gap-2">
                        <Button href='/rankings' size="lg" style={{textAlign:'left'}}>
                            <img 
                                alt=""
                                src={Icon_Rank}
                                height="50"
                                className="d-inline-block align-top menu-icon"
                            />{' '}
                            | RANKINGS
                        </Button>
                    </Container>
                    <Container className="d-grid gap-2">
                        <Button href='/match/records' size="lg" style={{textAlign:'left'}}>
                            <img 
                                alt=""
                                src={Icon_Racket}
                                height="50"
                                className="d-inline-block align-top menu-icon"
                            />{' '}
                            | MATCH RECORDS
                        </Button>
                    </Container>
                    <Container className="d-grid gap-2">
                        <Button href='/match/add' size="lg" style={{textAlign:'left'}}>
                            <img 
                                alt=""
                                src={Icon_Add}
                                height="50"
                                className="d-inline-block align-top menu-icon"
                            />{' '}
                            | NEW MATCH
                        </Button>
                    </Container>
                    <Container className="d-grid gap-2">
                        <Button href='/profiles' size="lg" style={{textAlign:'left'}}>
                            <img 
                                alt=""
                                src={Icon_Profile}
                                height="50"
                                className="d-inline-block align-top menu-icon"
                            />{' '}
                            | PLAYER PROFILES
                        </Button>
                    </Container>
                </div>    
            </div>
        )
    }
}