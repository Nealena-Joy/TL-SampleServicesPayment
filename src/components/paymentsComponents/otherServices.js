import React from 'react';
import { Accordion, Card, Button, Row, Col } from 'react-bootstrap';
import '../../App.css';
import './products.css';
import productsData from './productsData.json';


export default class otherServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        const accHeader = `OTHER SERVICES`;
        const accBody = `Ready to explore more? Dive into our diverse services!`;

        return(
            <div>
                <Accordion.Item eventKey="3" className='accordionItemStyle' >
                    <Accordion.Header>
                        {accHeader}
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            {accBody}
                        </p>
                        <Row>
                            {productsData.OtherServices.map((OtherService) => (
                                <Col md={6} lg={4} className='d-flex' key={OtherService.id}>
                                    <Card className="flex-fill cardStyle" border="primary">
                                        <Card.Body>
                                            <Card.Subtitle>
                                                <u>{OtherService.title}</u>
                                            </Card.Subtitle>
                                            <p>
                                                {OtherService.hours}
                                            </p>
                                            <p>
                                                {OtherService.description}
                                            </p>
                                        </Card.Body>
                                        <Card.Footer bsPrefix="cardFooter">
                                            {OtherService.cost}
                                        </Card.Footer>
                                        <Card.Footer bsPrefix="cardFooter" className="d-grid gap-2">
                                            <Button href={OtherService.paymentLink} size="sm">
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