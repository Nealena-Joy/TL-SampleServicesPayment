import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import OnlineTraining from './onlineTraining';
import TennisFitnessGroup from './tennisFitnessGroup';
import OtherServices from './otherServices';
import { ReactComponent as CallIcon } from '../assets/call.svg';
import { ReactComponent as Emailcon } from '../assets/email_1.svg';
import '../../App.css';
import './products.css';

export default class productsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return(
            <div>
                <div className='banner'>
                    <Container>
                        <Row style={{paddingTop:'20vh'}}>
                            <Col md={{span: 4, offset: 0}}>
                                <h1 style={{color:'whitesmoke'}}>
                                    Our Services
                                </h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div style={{backgroundColor: '#008fc3'}}>
                    <Container style={{textAlign:'center'}}>
                        <Row className="justify-content-md-center" style={{color:'whitesmoke',fontSize:'larger'}}>
                            <Col md="auto">
                                <a><b><CallIcon /> &nbsp; 09170000000 (Globe)</b></a>
                            </Col>
                            <Col md="auto">
                                <a><b><Emailcon /> &nbsp; TennisLab@gmail.com</b></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div style={{height:'10vh',backgroundColor:'black'}}></div>
                <div style={{backgroundColor:'black'}}>
                    <Container style={{color:'whitesmoke'}}>
                        <p>
                            Elevate your game with our comprehensive sports services and coaching. Whether you're a seasoned athlete or just starting out, our team of experienced coaches offers personalized training programs tailored to your specific sport and goals. From skill development to mental conditioning, we'll help you unleash your full potential and achieve success on and off the field. Take your performance to the next level with our expert guidance and support!
                        </p>
                        <div style={{height:'5vh'}}></div>
                        <h4>
                            Select a service
                        </h4>
                        <Accordion className='accordion'>
                            <OnlineTraining />
                            <TennisFitnessGroup />
                            <OtherServices />
                        </Accordion>
                    </Container>
                </div>
            </div>
        )
    }
}