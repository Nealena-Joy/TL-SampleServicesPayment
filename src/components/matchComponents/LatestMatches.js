import React from 'react';
import '../../App.css';
import { Container, Card, Row, Col, Button, Badge } from 'react-bootstrap';
import APIURL from '../helpers/environment';


export default class LatestMatches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MatchRecords: [],
            WinnerIndP1: '',
            WinnerIndP2: '',
        }

    }

    //!  Get Match Records
    fetchMatchRecords() {
        fetch(`${APIURL}/match/records/all`, {            
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

    formatDate(MATCH_DATE) {
        return(<div>{MATCH_DATE}</div>)
    }

    winnerIndicator(MatchRecord) {
        if (MatchRecord.MATCH_WINNER===MatchRecord.PLAYER1) {
            this.setState({WinnerIndP1: '✓', WinnerIndP2: ''})

        } else if (MatchRecord.MATCH_WINNER===MatchRecord.PLAYER2) {
            this.setState({WinnerIndP1: '', WinnerIndP2: '✓'})
        } else {
            console.log("[ERROR] Winner Indicator")
        }
    }

    render() {
        return(
            <div style={{}}>
                <Row xs={2} md={1}>
                {this.state.MatchRecords.sort((a,b)=>a.MATCH_DATE<b.MATCH_DATE?1:-1).slice(Math.max(this.state.MatchRecords.length-5,0)).map((MatchRecord, i)=>(
                    <Col xs={12}>
                        <Card key={i} style={{width:'100%'}}>
                                <Card.Body style={{padding:'5px'}}>
                                    <Card.Subtitle><Badge>{MatchRecord.LEVEL} Stage</Badge></Card.Subtitle>
                                    <Card.Text>
                                        <Container>
                                            <Row>
                                                <Col xs={6}>
                                                    {MatchRecord.PLAYER1}
                                                </Col>
                                                <Col xs={2}>
                                                    {this.winnerIndicator(MatchRecord)}
                                                    {this.state.WinnerP1}
                                                </Col>
                                                <Col xs={2}>
                                                    {MatchRecord.PLAYER1_SCORE}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={6}>
                                                    {MatchRecord.PLAYER2}
                                                </Col>
                                                <Col xs={2}>
                                                    {this.winnerIndicator(MatchRecord)}
                                                    {this.state.WinnerIndP2}
                                                </Col>
                                                <Col xs={2}>
                                                    {MatchRecord.PLAYER2_SCORE}
                                                </Col>
                                            </Row>


                                        </Container>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{padding:'5px', fontSize:'10px'}}>{this.formatDate(MatchRecord.MATCH_DATE)}</Card.Footer>
                        </Card>
                    </Col>
                ))}  
                </Row>     
            </div>
        )
    }
}