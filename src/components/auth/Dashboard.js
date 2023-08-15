import React from 'react';
import '../../App.css';
import {Container} from 'react-bootstrap';
import LatestMatches from '../matchComponents/LatestMatches';
import DashboardLinks from './DashboardLinks';

export default class Dashboard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }


    render() {
        const FIRST_NAME=localStorage.getItem('FIRST_NAME');
        
        return (
            <div>
                <div style={{backgroundColor:'#c5b448',padding:'1rem 0',color:'whitesmoke'}}>
                    <Container><h3>Welcome, Coach {FIRST_NAME}!</h3></Container>
                </div>
                <div style={{paddingBottom:'1rem'}}>
                    <Container>
                        <DashboardLinks />
                    </Container>
                </div>
                <div style={{backgroundColor:'lightgray',paddingBottom:'1rem'}}>
                    <Container>
                        <Container style={{paddingLeft:'0'}}>Latest Matches</Container>
                        <LatestMatches />
                    </Container>
                </div>
            </div>
        )
    }
}