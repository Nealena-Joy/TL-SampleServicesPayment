import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Col, Row, ButtonGroup } from 'react-bootstrap';
import APIURL from '../helpers/environment';
import BreadcrumbBar from '../auth/BreadcrumbBar';


export default class MatchCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allMatchScores: [
                {PLAYER1: '', PLAYER2: '', PLAYER1_SCORE: 0, PLAYER2_SCORE: 0, MATCH_WINNER: ''},
                {PLAYER1: '', PLAYER2: '', PLAYER1_SCORE: 0, PLAYER2_SCORE: 0, MATCH_WINNER: ''},
                {PLAYER1: '', PLAYER2: '', PLAYER1_SCORE: 0, PLAYER2_SCORE: 0, MATCH_WINNER: ''},
                {PLAYER1: '', PLAYER2: '', PLAYER1_SCORE: 0, PLAYER2_SCORE: 0, MATCH_WINNER: ''},
                {PLAYER1: '', PLAYER2: '', PLAYER1_SCORE: 0, PLAYER2_SCORE: 0, MATCH_WINNER: ''}
            ],
            MATCH_DATE: '',
            LEVEL: '',
            SET_NO: 0,
            MATCH_STATUS: 'Pending',
            CREATED_BY: localStorage.getItem('USERNAME'),
            MODIFIED_BY: localStorage.getItem('USERNAME')
        }
        
    }

    //!  Player Input Change
    handleInputChange(e,i) {
        e.preventDefault();
        let {name, value} = e.target;
        let allMatchScores = [...this.state.allMatchScores];
        let matchScore =  {...allMatchScores[i]};
        let matchScoreKey = Object.keys(matchScore);

        this.setState({
            [name]: value
        })

        //!  Setting Player Name values (based on key & value pair)
        //!  If name equals key and matches PLAYER1 or PLAYER2, then set value
        matchScoreKey.forEach((key, i)=>{
            if (name===key) {
                if (name==='PLAYER1') {
                    matchScore.PLAYER1 = value;
                } else if (name==='PLAYER2') {
                    matchScore.PLAYER2 = value;
                } else if (name==='PLAYER1_SCORE') {
                    let valueInt = parseInt(value);  // Turn string value into int
                    matchScore.PLAYER1_SCORE = valueInt;
                } else if (name==='PLAYER2_SCORE') {
                    let valueInt = parseInt(value);  // Turn string value into int
                    matchScore.PLAYER2_SCORE = parseInt(valueInt);
                }
            } else {
                console.log("ERROR: At handleInputChange (Player Names)")
            }
        })
        allMatchScores[i]=matchScore;
        this.setState({allMatchScores});

    }

    //!  Increase and Decrease Score Buttons
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

    //!  Create Match Records
    handleSubmit(e) {
        e.preventDefault();
        

        // Iterates through array of matches
        // Filtered so that if player name is null, it will not persist
        this.state.allMatchScores.filter(match_record=>match_record.PLAYER1!=='').filter(match_record=>match_record.PLAYER2!=='').forEach((match_record,i) => {
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
                    SET_NO: this.state.SET_NO,
                    MATCH_STATUS: this.state.MATCH_STATUS,
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
    };




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
                            <Row>
                                <Col xs={8}>
                                    <Row>
                                        <Form.Control size="sm" required placeholder="Player 1" name='PLAYER1'
                                        onChange={e=>this.handleInputChange(e,i)} />
                                    </Row>
                                    <Row>
                                        <Form.Control size="sm" required placeholder="Player 2" name='PLAYER2'
                                        onChange={e=>this.handleInputChange(e,i)} />
                                    </Row>
                                </Col>

                                <Col xs={1}>
                                    <Row>
                                        <ButtonGroup size="sm">
                                            <button onClick={e=>this.decreaseScoreP1(e,i)}>-</button>
                                            <input style={{width:'30px'}} value={this.state.allMatchScores[i].PLAYER1_SCORE} 
                                                name='PLAYER1_SCORE' onChange={e=>this.handleInputChange(e,i)}/>
                                            <button onClick={e=>this.increaseScoreP1(e,i)}>+</button>
                                        </ButtonGroup>
                                    </Row>
                                    <Row>
                                        <ButtonGroup size="sm">
                                            <button onClick={e=>this.decreaseScoreP2(e,i)}>-</button>
                                            <input style={{width:'30px'}} value={this.state.allMatchScores[i].PLAYER2_SCORE} 
                                                name='PLAYER1_SCORE' onChange={e=>this.handleInputChange(e,i)}/>
                                            <button onClick={e=>this.increaseScoreP2(e,i)}>+</button>
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