import React from 'react';
import '../../App.css';
import { Container, Form, Button, Col, Row, ButtonGroup } from 'react-bootstrap';
import APIURL from '../helpers/environment';


export default class MatchCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allMatchScores: [
                {PLAYER1: '', PLAYER2: '', PLAYER1_SCORE: 0, PLAYER2_SCORE: 0, MATCH_WINNER: ''},
                {PLAYER1: '', PLAYER2: '', PLAYER1_SCORE: 0, PLAYER2_SCORE: 0, MATCH_WINNER: ''},
                {PLAYER1: '', PLAYER2: '', PLAYER1_SCORE: 0, PLAYER2_SCORE: 0, MATCH_WINNER: ''},
                {PLAYER1: '', PLAYER2: '', PLAYER1_SCORE: 0, PLAYER2_SCORE: 0, MATCH_WINNER: ''},
                {PLAYER1: 'P1', PLAYER2: 'P2', PLAYER1_SCORE: 0, PLAYER2_SCORE: 0, MATCH_WINNER: ''}
            ],
            MATCH_DATE: '',
            LEVEL: '',
            CREATED_BY: 'Admin',
            MODIFIED_BY: 'Admin'
        }
        
    }


    // +/- BUTTONS
    decreaseScoreP1(e, i) {
        e.preventDefault();
        let allMatchScores = [...this.state.allMatchScores];
        let matchScore =  {...allMatchScores[i]};
        matchScore.PLAYER1_SCORE = this.state.allMatchScores[i].PLAYER1_SCORE-1;

        // Get Match Winner
        if (this.state.allMatchScores[i].PLAYER1_SCORE > this.state.allMatchScores[i].PLAYER2_SCORE) {
            matchScore.MATCH_WINNER = this.state.allMatchScores[i].PLAYER1;
            console.log("Player 1 winner");
        } else if (this.state.allMatchScores[i].PLAYER1_SCORE < this.state.allMatchScores[i].PLAYER2_SCORE) {
            matchScore.MATCH_WINNER = this.state.allMatchScores[i].PLAYER2;
            console.log("Player 2 winner");
        };

        allMatchScores[i]=matchScore;
        this.setState({allMatchScores});

    };

    increaseScoreP1(e, i) {
        e.preventDefault();
        let allMatchScores = [...this.state.allMatchScores];
        let matchScore =  {...allMatchScores[i]};
        matchScore.PLAYER1_SCORE = this.state.allMatchScores[i].PLAYER1_SCORE+1;

        // Get Match Winner
        if (this.state.allMatchScores[i].PLAYER1_SCORE > this.state.allMatchScores[i].PLAYER2_SCORE) {
            matchScore.MATCH_WINNER = this.state.allMatchScores[i].PLAYER1;
            console.log("Player 1 winner");
        } else if (this.state.allMatchScores[i].PLAYER1_SCORE < this.state.allMatchScores[i].PLAYER2_SCORE) {
            matchScore.MATCH_WINNER = this.state.allMatchScores[i].PLAYER2;
            console.log("Player 2 winner");
        };

        allMatchScores[i]=matchScore;
        this.setState({allMatchScores});        

    };

    decreaseScoreP2(e, i) {
        e.preventDefault();
        let allMatchScores = [...this.state.allMatchScores];
        let matchScore =  {...allMatchScores[i]};
        matchScore.PLAYER2_SCORE = this.state.allMatchScores[i].PLAYER2_SCORE-1;

        // Get Match Winner
        if (this.state.allMatchScores[i].PLAYER1_SCORE > this.state.allMatchScores[i].PLAYER2_SCORE) {
            matchScore.MATCH_WINNER = this.state.allMatchScores[i].PLAYER1;
            console.log("Player 1 winner");
        } else if (this.state.allMatchScores[i].PLAYER1_SCORE < this.state.allMatchScores[i].PLAYER2_SCORE) {
            matchScore.MATCH_WINNER = this.state.allMatchScores[i].PLAYER2;
            console.log("Player 2 winner");
        };

        allMatchScores[i]=matchScore;
        this.setState({allMatchScores});

    }

    increaseScoreP2(e,i) {
        e.preventDefault();
        let allMatchScores = [...this.state.allMatchScores];
        let matchScore =  {...allMatchScores[i]};
        matchScore.PLAYER2_SCORE = this.state.allMatchScores[i].PLAYER2_SCORE+1;
        
        // Get Match Winner
        if (this.state.allMatchScores[i].PLAYER1_SCORE > this.state.allMatchScores[i].PLAYER2_SCORE) {
            matchScore.MATCH_WINNER = this.state.allMatchScores[i].PLAYER1;
            console.log("Player 1 winner");
        } else if (this.state.allMatchScores[i].PLAYER1_SCORE < this.state.allMatchScores[i].PLAYER2_SCORE) {
            matchScore.MATCH_WINNER = this.state.allMatchScores[i].PLAYER2;
            console.log("Player 2 winner");
        };

        allMatchScores[i]=matchScore;
        this.setState({allMatchScores});

    };

    //!  Match Winner
    getMatchWinner() {
        this.state.allMatchScores.forEach((match_record, i) => {
            console.log(`IF: ${i} --- ${this.state.allMatchScores[i].PLAYER1_SCORE}-${this.state.allMatchScores[i].PLAYER2_SCORE}`);
            
            let allMatchScores = [...this.state.allMatchScores];
            let matchScore = {...allMatchScores[i]};

            if (this.state.allMatchScores[i].PLAYER1_SCORE > this.state.allMatchScores[i].PLAYER2_SCORE) {
                // let allMatchScores = [...this.state.allMatchScores];
                // let matchScore = {...allMatchScores[i]};
                matchScore.MATCH_WINNER = this.state.allMatchScores[i].PLAYER1;

                console.log("Player 1 winner");
                // allMatchScores[i]=matchScore;
                // this.setState({allMatchScores});

            } else if (this.state.allMatchScores[i].PLAYER1_SCORE < this.state.allMatchScores[i].PLAYER2_SCORE) {
                // let allMatchScores = [...this.state.allMatchScores];
                // let matchScore = {...allMatchScores[i]};
                matchScore.MATCH_WINNER = this.state.allMatchScores[i].PLAYER2;

                console.log("Player 2 winner");
                // allMatchScores[i]=matchScore;
                // this.setState({allMatchScores});

            };
            allMatchScores[i]=matchScore;
            this.setState({allMatchScores});

            console.log("winner: ", matchScore.MATCH_WINNER);

        });
    };


    //!  Create Match Records
    handleSubmit(e) {
        e.preventDefault();

        // Iterates through array of matches
        this.state.allMatchScores.forEach((match_record,i) => {
            console.log("handleSubmit", this.state.allMatchScores);

            fetch(`${APIURL}/match/new`, {            
                method: 'POST', 
                body: JSON.stringify({match_record: {
                    PLAYER1: this.state.allMatchScores[i].PLAYER1,
                    PLAYER2: this.state.allMatchScores[i].PLAYER2,
                    MATCH_WINNER: this.state.allMatchScores[i].MATCH_WINNER,
                    PLAYER1_SCORE: this.state.allMatchScores[i].PLAYER1_SCORE,
                    PLAYER2_SCORE: this.state.allMatchScores[i].PLAYER2_SCORE,
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
        });
        
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

                    {this.state.allMatchScores.map((matchScore, i) => (
                        <Container key={i}>
                            <Row>Match #{i+1}</Row>
                            <Row className="square border border-1">
                                <Col xs={8}>
                                    <Row className="square border border-1">
                                        <Form.Control size="sm" required placeholder="Player 1" name='P1'
                                        onChange={(e)=>this.handleInputChange(i, e)} />
                                    </Row>
                                    <Row className="square border border-1">
                                        <Form.Control size="sm" required placeholder="Player 2" name='P2'
                                        onChange={(e)=>this.handleInputChange(i, e)} />
                                    </Row>
                                </Col>

                                <Col xs={1}>
                                    <Row className="square border border-1">
                                        <ButtonGroup size="sm">
                                            <Button name="decreaseScore" onClick={e=>this.decreaseScoreP1(e,i)}>-</Button>
                                            <Button>
                                                {this.state.allMatchScores[i].PLAYER1_SCORE}
                                            </Button>
                                            <Button onClick={e=>this.increaseScoreP1(e,i)}>+</Button>
                                        </ButtonGroup>
                                    </Row>
                                    <Row className="square border border-1">
                                        <ButtonGroup size="sm">
                                            <Button onClick={e=>this.decreaseScoreP2(e,i)}>-</Button>
                                            <Button>
                                                {this.state.allMatchScores[i].PLAYER2_SCORE}
                                            </Button>
                                            <Button onClick={e=>this.increaseScoreP2(e,i)}>+</Button>
                                        </ButtonGroup>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                        ))}
                        

                        
                    </Form>
                </Container>
                        
                <p style={{color:'red'}}>Please check all details before clicking submit.</p>
                <Button size='sm' onClick={e=>this.handleSubmit(e)} >Submit</Button>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                {console.log("ARRAY: ", this.state.allMatchScores)}

            </Container>
        )
    }
}