import React from 'react';
import { Accordion, Card, Container, Button, Row, Col } from 'react-bootstrap';
import '../../App.css';
import BannerImage from '../assets/SportsWallpaper.jpeg';
import OnlineTraining from './onlineTraining';
import TennisFitnessGroup from './tennisFitnessGroup';

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
                    <Container>
                        <Row style={{paddingTop:'20vh'}}>
                            <Col md={{ span: 3, offset: 2 }}>
                                <h1 style={{color:'whitesmoke'}}>Our Services</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div style={{backgroundColor: '#008fc3'}}>
                    <Container style={{textAlign:'center'}}>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <a style={{fontSize:'larger',margin:'15px'}}><b>Mobile: 09170000000 (Globe)</b></a>
                            </Col>
                            <Col md="auto">
                                <a style={{fontSize:'larger',margin:'15px'}}><b>Email: TennisLab@gmail.com</b></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div style={{height:'10vh',backgroundColor:'black'}}></div>
                <div style={{backgroundColor:'black'}}>
                    <Container style={{color:'whitesmoke'}}>
                        <h3>Select a service</h3>
                        <Accordion defaultActiveKey="0">
                            <OnlineTraining />
                            <TennisFitnessGroup />
                        </Accordion>
                    </Container>
                </div>
            </div>
        )
    }
}