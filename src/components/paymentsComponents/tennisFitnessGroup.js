import React from 'react';
import { Accordion, Card, Container, Button, Row, Col } from 'react-bootstrap';
import BannerImage from '../assets/SportsWallpaper.jpeg';
import '../../App.css';


export default class tennisFitnessGroup extends React.Component {
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
                <Accordion.Item eventKey="1" style={accordionItemStyle}>
                    <Accordion.Header>TENNIS FITNESS SESSIONS</Accordion.Header>
                    <Accordion.Body>
                        <p>Here to help you train and perform at your best.</p>
                        <Row className="justify-content-md-center">
                            <Col sm className='d-flex'>
                                <Card className="flex-fill" style={cardStyle}>
                                    <Card.Body>
                                        <Card.Title>Individual Tennis S&C Assessment Consultation</Card.Title>
                                        <p>1 hour</p>
                                        <p>
                                            Transform your game and dominate the court with our tennis strength and conditioning program! Our tailored sessions are designed to enhance every aspect of your game by focusing on building strength, agility, speed, and endurance specific to tennis movements. Whether you're a competitive player looking to gain an edge or a recreational player seeking to elevate your game, our tennis strength and conditioning program will help you develop the physical prowess needed to outmatch your opponents. 
                                        </p>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <p>Cost: Php 5,500</p>
                                            <Button variant="success" href="">
                                                BOOK NOW
                                            </Button>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm className='d-flex'>
                                <Card className="flex-fill" style={cardStyle}>
                                    <Card.Body>
                                        <Card.Title>Tennis Fitness Group Session</Card.Title>
                                        <p>2 hours</p>
                                        <p>
                                            Get ready to ace your fitness goals with our dynamic tennis fitness group sessions! Designed to boost your endurance, agility, and strength while honing your tennis skills, these sessions offer a winning combination of cardio, strength training, and tennis-specific drills. Join us on the court and take your game – and fitness – to the next level!
                                        </p>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <p>Cost: Php 2,500 per head</p>
                                            <Button variant="success" href="">
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