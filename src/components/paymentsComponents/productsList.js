import React from 'react';
import { Accordion, Card, Container, Button, Row, Col } from 'react-bootstrap';
import '../../App.css';
import BannerImage from '../assets/SportsWallpaper.jpeg';

export default class productsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkoutTotal: 0
        }
    }
    render() {
        const cardStyle = {
            margin: "15px",
            width: "40%",
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
            borderRadius: '0'
        }

        return(
            <div>
                <div style={banner}>
                    <Row style={{paddingTop:'20vh'}}>
                        <Col md={{ span: 3, offset: 2 }}>
                            <h1 style={{color:'whitesmoke'}}>Our Services</h1>
                        </Col>
                    </Row>
                </div>
                <div style={{backgroundColor: '#008fc3'}}>
                    <Container style={{textAlign:'center'}}>
                        <a style={{fontSize:'larger',margin:'15px'}}><b>✆ 09170000000 (Globe)</b></a>
                        <a style={{fontSize:'larger',margin:'15px'}}><b>✉ TennisLab@gmail.com</b></a>
                    </Container>
                </div>
                <div style={{height:'10vh',backgroundColor:'black'}}></div>
                <div style={{backgroundColor:'black'}}>
                    <Container style={{color:'whitesmoke'}}>
                        <h3>Select a service</h3>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" style={accordionItemStyle}>
                                <Accordion.Header>ONLINE TRAINING PROGRAM</Accordion.Header>
                                <Accordion.Body>
                                    <p>Here to help you train and perform at your best.</p>
                                    <Row className="justify-content-md-center">
                                        <Card style={cardStyle}>
                                            <Card.Body>
                                                <Card.Title>Initial Online Consult</Card.Title>
                                                <p>One off online on set up fee on the <a href='https://www.teambuildr.com/'>Team Builder</a> app + consultation + program design + exercise videos + on-going communication</p>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Row>
                                                    <p>Cost: Php 5,500</p>
                                                    <Button variant="success" href="https://pm.link/qtph-ti2UcyBVeN7fcud3zEGUTyTw/test/g4aEFSA">SELECT</Button>
                                                </Row>
                                            </Card.Footer>
                                        </Card>
                                        <Card style={cardStyle}>
                                            <Card.Body>
                                                <Card.Title>Follow-Up Online Consult</Card.Title>
                                                <p>Program update + exercise videos</p>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Row>
                                                    <p>Cost: Php 1,900</p>
                                                    <Button variant="success" href="https://pm.link/qtph-ti2UcyBVeN7fcud3zEGUTyTw/test/g4aEFSA">SELECT</Button>
                                                </Row>
                                            </Card.Footer>
                                        </Card>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" style={accordionItemStyle}>
                                <Accordion.Header>TENNIS FITNESS GROUP SESSIONS</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" style={accordionItemStyle}>
                                <Accordion.Header>PHYSICAL THERAPY</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                </div>
            </div>
        )
    }
}