import React from 'react';
import '../../App.css';
import { Container, Card, Row, Col, Button, Badge } from 'react-bootstrap';
import APIURL from '../helpers/environment';


export default class LatestMatches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MatchRecords: [],
            WinnerP1: '',
            WinnerP2: '',
            textColorP1: 'black',
            textColorP2: 'black'
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
        this.fetchMatchRecords();
    }

    formatDate(MATCH_DATE) {
        return(<>{MATCH_DATE}</>)
    }

    WinnerCheckP1(MatchRecord,i) {
        if (MatchRecord.PLAYER1===MatchRecord.MATCH_WINNER) {
            return(<>✔️</>)
        }
    }

    WinnerCheckP2(MatchRecord,i) {
        if (MatchRecord.PLAYER2===MatchRecord.MATCH_WINNER) {
            return(<>✔️</>)
        }
    }

    render() {
        return(
            <div style={{}}>
                <Row xs={2} md={1}>
                {this.state.MatchRecords.sort((a,b)=>a.MATCH_DATE<b.MATCH_DATE?1:-1).slice(Math.max(this.state.MatchRecords.length-5,0)).map((MatchRecord, i)=>(
                    <Col key={i} xs={12}>
                        <Card style={{width:'100%'}}>
                            <Card.Header style={{padding:'5px', fontSize:'12px'}}>{MatchRecord.LEVEL} Stage</Card.Header>
                            <Card.Body style={{padding:'5px'}}>
                                <Card.Text>
                                    <Container>
                                        <Row>
                                            <Col xs={8}>
                                                {MatchRecord.PLAYER1}
                                            </Col>
                                            <Col xs={2}>
                                                {this.WinnerCheckP1(MatchRecord,i)}                                                    
                                            </Col>
                                            <Col xs={2}>
                                                {MatchRecord.PLAYER1_SCORE}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={8}>
                                                {MatchRecord.PLAYER2}
                                            </Col>
                                            <Col xs={2}>
                                                {this.WinnerCheckP2(MatchRecord,i)}                                                    
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