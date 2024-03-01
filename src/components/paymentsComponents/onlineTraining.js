import React from 'react';
import { Accordion, Card, Container, Button, Row, Col } from 'react-bootstrap';
import BannerImage from '../assets/SportsWallpaper.jpeg';
import '../../App.css';
import productsData from './productsData.json';


export default class onlineTraining extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const cardStyle = {
            margin: "15px",
        };
        const banner = {
            backgroundImage: `url(${BannerImage})`,
            backgroundColor: 'black',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '50vh'
        };
        const accordionItemStyle = {
            margin: '5px 0',
            borderRadius: '0',
            backgroundColor: 'lightblue',
        }

        return(
            <div>
                <Accordion.Item eventKey="0" style={accordionItemStyle}>
                    <Accordion.Header>ONLINE TRAINING PROGRAM</Accordion.Header>
                    <Accordion.Body>
                        <p>Here to help you train and perform at your best.</p>
                        <Row className="justify-content-md-center">
                            <Col sm className='d-flex'>
                                <Card className="flex-fill" style={cardStyle}>
                                    <Card.Body>
                                        <Card.Title>Initial Online Consultation</Card.Title>
                                        <p>1 hour</p>
                                        <p>One off online on set up fee on the <a href='https://www.teambuildr.com/'>Team Builder</a> app + consultation + program design + exercise videos + on-going communication</p>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <p>Cost: Php 5,500</p>
                                            <Button variant="success" href="https://pm.link/qtph-ti2UcyBVeN7fcud3zEGUTyTw/test/g4aEFSA">
                                                BOOK NOW
                                            </Button>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm className='d-flex'>
                                <Card className="flex-fill" style={cardStyle}>
                                    <Card.Body>
                                        <Card.Title>Follow-Up Online Consultation</Card.Title>
                                        <p>1 hour</p>
                                        <p>Program update + exercise videos</p>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <p>Cost: Php 1,900</p>
                                            <Button variant="success" href="https://pm.link/qtph-ti2UcyBVeN7fcud3zEGUTyTw/test/g4aEFSA">
                                                BOOK NOW
                                            </Button>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </div>
        )
    }
}


/**
 *  FOR IMPORTING JSON, SAMPLE:    
                        {
                                productsData.OLTrainings.map((OLTraining) => (
                                    <div key={OLTraining.id}>
                                        <h1>{OLTraining.title}</h1>
                                        <h2>{OLTraining.description}</h2>
                                    </div>
                                ))
                            }
 */