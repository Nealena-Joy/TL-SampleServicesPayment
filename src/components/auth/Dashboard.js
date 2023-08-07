import React from 'react';
import '../../App.css';
import Icon_Rank from '../assets/star.svg';
import Icon_Racket from '../assets/racket.svg';
import Icon_Add from '../assets/add2.svg';
import Icon_Profile from '../assets/profile.svg';
import { Button, Container } from 'react-bootstrap';
import LatestMatches from '../matchComponents/LatestMatches';
import DashboardLinks from './DashboardLinks';

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
                <div style={{backgroundColor:'blue',padding:'2rem 0'}}>
                    <Container>Welcome, Coach {FIRST_NAME}!</Container>
                </div>
                <div>
                    <Container>
                        <DashboardLinks />
                    </Container>
                </div>
                <div style={{paddingTop:'1rem'}}>
                    <Container>
                        <div>Latest Matches</div>
                        <LatestMatches />
                    </Container>
                </div>
            </div>
        )
    }
}