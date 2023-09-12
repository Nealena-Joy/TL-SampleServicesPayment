import React from 'react';
import '../../App.css';
import {Container} from 'react-bootstrap';
import LatestMatches from '../matchComponents/LatestMatches';
import DashboardLinks from './DashboardLinks';
import Events from '../events/Events';

export default class Dashboard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }


    render() {
        const FIRST_NAME=localStorage.getItem('FIRST_NAME');
        
        return (
            <div style={{backgroundColor: 'black'}}>
                <div className='DashboardC'>
                    <div className='WelcomeBannerC'>
                        <Container><h3>Welcome, Coach {FIRST_NAME}!</h3></Container>
                    </div>
                </div>
                <div className='DashboardLinksC'>
                    <Container style={{padding:'0px'}}>
                        <DashboardLinks />
                    </Container>  
                </div>
                <div className='LatestMatchesC'>
                    <Container>
                        <Container style={{paddingLeft:'0'}}>Latest Matches</Container>
                        <LatestMatches />
                    </Container>
                </div>
                <div className='Events' style={{backgroundColor:'whitesmoke'}}>
                    <Container>
                        <Container style={{paddingLeft:'0'}}>Events</Container>
                        <Events />
                    </Container>
                </div>
            </div>
        )
    }
}