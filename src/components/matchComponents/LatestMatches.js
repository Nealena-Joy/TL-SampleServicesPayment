import React from 'react';
import '../../App.css';
import { Container, Card, Row, Col, Button, Badge } from 'react-bootstrap';


export default class LatestMatches extends React.Component {


    render() {
        return(
            <div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Subtitle>Monday, August 07, 2023 {' '}
                                <Badge bg='danger' pill>Red</Badge>
                            </Card.Subtitle>
                            <Card.Text>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Row>Player 1 (2)</Row>
                                            <Row>Player 2 (3)</Row>
                                        </Col>
                                        <Col xs={1}>
                                            <Row>W</Row>
                                            <Row></Row>
                                        </Col>
                                        <Col xs={4}>
                                            <Row>8</Row>
                                            <Row>0</Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                </div>
                   
            </div>
        )
    }
}