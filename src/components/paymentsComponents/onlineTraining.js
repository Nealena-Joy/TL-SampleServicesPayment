import React from 'react';
import { Accordion, Card, Container, Button, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../../App.css';
import './products.css';
import productsData from './productsData.json';


export default class onlineTraining extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        const accHeader = `ONLINE TRAINING PROGRAM`;
        const accBody = `Embark on your fitness journey with our personalized online fitness consultation! Our expert trainers will assess your goals, lifestyle, and fitness level to tailor a customized plan just for you. From workout routines to nutrition advice, we'll provide the guidance and support you need to achieve your health and wellness goals.`;

        return(
            <div>
                <Accordion.Item eventKey="0" className='accordionItemStyle'>
                    <Accordion.Header>
                        {accHeader}
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            {accBody} 
                        </p>
                        <Row>
                            {productsData.OLTrainings.map((OLTraining) => (
                                <Col md={6} lg={4} className='d-flex' key={OLTraining.id}>
                                    <Card className="flex-fill cardStyle" border="primary">
                                        <Card.Body>
                                            <Card.Subtitle>
                                                <u>{OLTraining.title}</u>
                                            </Card.Subtitle>
                                            <p>
                                                {OLTraining.description}
                                            </p>
                                            <p>
                                                {OLTraining.hours}
                                            </p>
                                        </Card.Body>
                                        <Card.Footer bsPrefix="cardFooter">
                                            {OLTraining.cost}
                                        </Card.Footer>
                                        <Card.Footer bsPrefix="cardFooter" className="d-grid gap-2">
                                            <Button href={OLTraining.paymentLink} size="sm">
                                                SELECT
                                            </Button>                                  
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
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