import React from 'react';
import '../../App.css';
import { Container, Card } from 'react-bootstrap';
import BreadcrumbBar from '../auth/BreadcrumbBar.js';


export default class PointCalculation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }

    }

    

    render() {
        return(
            <Container style={{padding:'0', backgroundColor: 'whitesmoke',height:'500rem'}}>
                <p>Player Profiles:  Coming soon...</p>
            </Container>
        )
    }
}