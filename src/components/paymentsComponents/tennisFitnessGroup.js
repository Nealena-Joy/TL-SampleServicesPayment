import React from 'react';
import { Accordion, Card, Container, Button, Row, Col } from 'react-bootstrap';
import '../../App.css';
import './products.css';
import productsData from './productsData.json';


export default class tennisFitnessGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        const accHeader = `TENNIS FITNESS SESSIONS`;
        const accBody = `Here to help you train and perform at your best.`;

        return(
            <div>
                <Accordion.Item eventKey="1" className='accordionItemStyle'>
                    <Accordion.Header>
                        {accHeader}
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            {accBody}
                        </p>
                        <Row>
                            {productsData.TennisFitnessSessions.map((TennisFitnessSession) => (
                                <Col md={6} lg={4} className='d-flex' key={TennisFitnessSession.id}>
                                    <Card className="flex-fill cardStyle" border="primary">
                                        <Card.Body>
                                            <Card.Subtitle>
                                                <u>{TennisFitnessSession.title}</u>
                                            </Card.Subtitle>
                                            <p>
                                                {TennisFitnessSession.hours}
                                            </p>
                                            <p>
                                                {TennisFitnessSession.description}
                                            </p>
                                        </Card.Body>
                                        <Card.Footer bsPrefix="cardFooter">
                                            {TennisFitnessSession.cost}
                                        </Card.Footer>
                                        <Card.Footer bsPrefix="cardFooter" className="d-grid gap-2">
                                            <Button href={TennisFitnessSession.paymentLink} size="sm">
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