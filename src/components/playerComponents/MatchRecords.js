import React from 'react';
import { Table, Container, Row, ButtonGroup, ToggleButton, Tabs, Tab, ToggleButtonGroup, Button, Card, Col } from 'react-bootstrap';
import '../../App.css';


export default class MatchRecords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MatchRecords: []
        }

    }

    //!  Get Match Records
    fetchMatchRecords() {
        console.log("Level Value: ", this.state.filterLevel)
        fetch(`http://localhost:8000/match/records/all`, {            
            method: 'GET', 
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => response.json())
        .then((response) => {
            // console.log("MatchRecords:", response.MatchRecords);
            this.setState({MatchRecords: response.MatchRecords})
        })
        .catch((error) => console.log("ERROR! [at fetchMatchRecords]:", error))
    }

    componentDidMount(){
        this.fetchMatchRecords()
    }

    render() {
        return(
            <Container fluid className='container' style={{overflowY:'auto'}}>
                <Container className='container' style={{paddingBottom:'5px'}}>
                    <Row>
                        <Button size='sm'>MATCH RESULTS</Button>
                    </Row>
                </Container>

                {this.state.MatchRecords.sort((a,b)=>a.MATCH_DATE<b.MATCH_DATE?1:-1).map((MatchRecord, index)=>(
                    <Container>
                        <Container key={index+1} size={{padding:'3px'}}>
                            <Row>Date: {MatchRecord.MATCH_DATE}</Row>
                            <Row className="square border border-1">
                                <Col xs={1}>{index+1}</Col>
                                <Col xs={8}>
                                    <Row className="square border border-1">{MatchRecord.PLAYER1}</Row>
                                    <Row className="square border border-1">{MatchRecord.PLAYER2}</Row>
                                </Col>
                                <Col xs={1}>
                                    <Row className="square border border-1">{MatchRecord.PLAYER1_SCORE}</Row>
                                    <Row className="square border border-1">{MatchRecord.PLAYER2_SCORE}</Row>
                                </Col>
                                <Col>Edit</Col>
                            </Row>
                        </Container>
                    </Container>
                ))}

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </Container>
        )
    }
};