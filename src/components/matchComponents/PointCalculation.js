import React from 'react';
import '../../App.css';
import { Container, Card } from 'react-bootstrap';
import BreadcrumbBar from '../auth/BreadcrumbBar.js';


export default class PointCalculation extends React.Component {


    render() {
        return(
            <Container style={{padding:'0'}}>
                <Container style={{padding:'0'}}><BreadcrumbBar /></Container>
                <p>UNDER CONSTRUCTION (Point Calc)</p>
            </Container>
        )
    }
}