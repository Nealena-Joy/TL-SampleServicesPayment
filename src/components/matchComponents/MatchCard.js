import React from 'react';
import '../../App.css';
import { Container, Card, Row, Col, Table } from 'react-bootstrap';


export default class MatchCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    formatDate(MATCH_DATE) {
        return(<>{MATCH_DATE}</>)
    }

    WinnerCheckP1(MatchRecord,i) {
        if (MatchRecord.PLAYER1===MatchRecord.MATCH_WINNER) {
            return(<>✅</>)
        }
    }

    WinnerCheckP2(MatchRecord,i) {
        if (MatchRecord.PLAYER2===MatchRecord.MATCH_WINNER) {
            return(<>✅</>)
        }
    }

    render() {
        const callLatest = this.props.callLatest;

        return(
            <div>
                {
                    callLatest ? 
                    <>
                        {this.props.MatchRecords.sort((a,b)=>a.MATCH_DATE<b.MATCH_DATE?1:-1).slice(Math.max(this.props.MatchRecords.length-5,0)).map((MatchRecord, i)=>(
                            <Card key={i} style={{width:'300px',display:'inline-block',marginRight:'10px'}}>
                                <Card.Header style={{padding:'5px', fontSize:'12px'}}>{MatchRecord.LEVEL} Stage</Card.Header>
                                <Card.Body style={{padding:'5px'}}>
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
                                </Card.Body>
                                <Card.Footer style={{padding:'5px', fontSize:'10px'}}>{this.formatDate(MatchRecord.MATCH_DATE)}</Card.Footer>
                            </Card>
                        ))}
                    </> 
                    
                    : 
                    
                    <Row>
                        {this.props.MatchRecords.sort((a,b)=>a.MATCH_DATE<b.MATCH_DATE?1:-1).map((MatchRecord, i)=>(
                        <Col key={i} sm={6} style={{}}>
                            <Card style={{margin:'5px'}}>
                                <Card.Header style={{padding:'5px', fontSize:'12px'}}>
                                    {i+1} ‣ {MatchRecord.MATCH_DATE} ‣ {MatchRecord.LEVEL}
                                </Card.Header>
                                <Card.Body>
                                    <Table style={{border:'transparent',margin:'0'}}>
                                        <tbody>
                                            <tr>
                                                <td style={{padding:"0 10px",margin:"0",textAlign:"left"}}>{MatchRecord.PLAYER1}</td>
                                                <td style={{padding:'0'}}>{this.WinnerCheckP1(MatchRecord,i)}</td>
                                                <td style={{width:'20%',padding:"0",margin:"0"}}>{MatchRecord.PLAYER1_SCORE}</td>
                                            </tr>
                                            <tr>
                                                <td style={{padding:"0 10px",margin:"0",textAlign:"left"}}>{MatchRecord.PLAYER2}</td>
                                                <td style={{padding:'0'}}>{this.WinnerCheckP2(MatchRecord,i)}</td>
                                                <td style={{width:'20%',padding:"0",margin:"0"}}>{MatchRecord.PLAYER2_SCORE}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                }
                        
            </div>
        )
    }
}