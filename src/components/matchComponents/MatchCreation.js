import React from 'react';
import '../../App.css';
import { Container, Form, Button, Col, Row, ButtonGroup } from 'react-bootstrap';
import APIURL from '../helpers/environment';


export default class MatchCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match_record: [],
            LEVEL: '',
            PLAYER1: '',
            PLAYER2: '',
            PLAYER1_SCORE: 0,
            PLAYER2_SCORE: 0,
            MATCH_WINNER: '',
            MATCH_DATE: '',
            CREATED_BY: '',
            MODIFIED_BY: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //!  Create Match Records
    handleSubmit(e) {
        console.log("Match Form Input: ", this.state.match_record);
        e.preventDefault();

        fetch(`${APIURL}/match/new`, {            
            method: 'POST', 
            body: JSON.stringify({match_record: {
                PLAYER1: this.state.PLAYER1,
                PLAYER2: this.state.PLAYER2,
                MATCH_WINNER: this.state.PLAYER1,
                PLAYER1_SCORE: this.state.PLAYER1_SCORE,
                PLAYER2_SCORE: this.state.PLAYER2_SCORE,
                MATCH_DATE: this.state.MATCH_DATE,
                LEVEL: this.state.LEVEL,
                CREATED_BY: this.state.CREATED_BY,
                MODIFIED_BY: this.state.MODIFIED_BY
            }}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => response.json())
        .then((response) => {
            console.log("Match Created: ", response);
        })
        .catch((error) => console.log("ERROR! [at fetchMatchRecords]:", error))
    }

    decreaseScoreP1=(e)=> {
        e.preventDefault();
        this.setState({PLAYER1_SCORE: this.state.PLAYER1_SCORE-1})
    }

    increaseScoreP1=(e)=> {
        e.preventDefault();
        this.setState({PLAYER1_SCORE: this.state.PLAYER1_SCORE+1})
    }

    decreaseScoreP2=(e)=> {
        e.preventDefault();
        this.setState({PLAYER2_SCORE: this.state.PLAYER2_SCORE-1})
    }

    increaseScoreP2=(e)=> {
        e.preventDefault();
        this.setState({PLAYER2_SCORE: this.state.PLAYER2_SCORE+1})
    }
    

    render() {
        return(
            <Container fluid className='container' style={{overflowY:'auto'}}>
                <Container>
                    <Row>
                        <Button size='sm' variant="success">NEW MATCH</Button>
                    </Row>
                </Container>
                
                <Container style={{padding:'5px'}}>
                    <Form size='sm' >

                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Match Date*</Form.Label>
                                <Form.Control size="sm" type='date' name='matchdate' id='MatchDate' onChange={(e)=>this.setState({MATCH_DATE: e.target.value})} />
                            </Form.Group>
                        
                            <Form.Group as={Col} controlId="">
                                <Form.Label>Level*</Form.Label>
                                <Form.Select size="sm" required defaultValue="Select..." id='Level' onChange={(e)=>this.setState({LEVEL: e.target.value})} >
                                    <option>Select...</option>
                                    <option>Red</option>
                                    <option>Orange</option>
                                    <option>Green</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Container>
                            <Row className="square border border-1">
                                    <Col xs={8}>
                                        <Row className="square border border-1">
                                            <Form.Control size="sm" required placeholder="Player 1" id='P1'
                                            onChange={(e)=>this.setState({PLAYER1: e.target.value})} />
                                        </Row>
                                        <Row className="square border border-1">
                                            <Form.Control size="sm" required placeholder="Player 2" id='P2'
                                            onChange={(e)=>this.setState({PLAYER2: e.target.value})} />
                                        </Row>
                                    </Col>
                                    <Col xs={1}>
                                        <Row className="square border border-1">
                                            <ButtonGroup size="sm">
                                                <Button onClick={this.decreaseScoreP1}>-</Button>
                                                <Button>
                                                    {this.state.PLAYER1_SCORE}
                                                </Button>
                                                <Button onClick={this.increaseScoreP1}>+</Button>
                                            </ButtonGroup>
                                        </Row>
                                        <Row className="square border border-1">
                                            <ButtonGroup size="sm">
                                                <Button onClick={this.decreaseScoreP2}>-</Button>
                                                <Button>
                                                    {this.state.PLAYER2_SCORE}
                                                </Button>
                                                <Button onClick={this.increaseScoreP2}>+</Button>
                                            </ButtonGroup>
                                        </Row>
                                    </Col>
                            </Row>
                        </Container>

                        
                    </Form>
                </Container>

                <p style={{color:'red'}}>Please check all details before clicking submit.</p>
                <Button size='sm' onClick={this.handleSubmit}>Submit</Button>

            </Container>
        )
    }
}