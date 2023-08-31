import React from 'react';
import '../../App.css';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Icon_Rank from '../assets/star.svg';
import Icon_Racket from '../assets/racket.svg';
import Icon_Add from '../assets/add2.svg';
import Icon_Profile from '../assets/profile.svg';


export default class DashboardLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        const Cards = [
            {Title:'Rankings',Text:'Check out the player rankings per category (level).', Link:'/rankings'},
            {Title:'Match Results',Text:'View and modify match results.', Link:'/match/records'},
            {Title:'Profiles',Text:`View, add, and modify a player's profile.`, Link:'/players'},
            {Title:'Add Matches',Text:'Easily record a match result.', Link:'match/add'}
        ]
        return(
            <div>
                <Row xs={2} md={4}>
                    {Cards.map((CardContent,i) => (
                        <Col key={i}>
                            <Card style={{backgroundColor:'lightblue', margin:'1em 0',height:'95%'}} href={CardContent.Link}>
                                <Card.Body>
                                    <Card.Subtitle>{CardContent.Title}</Card.Subtitle>
                                    <Card.Text>
                                        {CardContent.Text}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Link href={CardContent.Link}>Go</Card.Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}