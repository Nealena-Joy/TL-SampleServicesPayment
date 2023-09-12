/*
* Passed state values to match record filter class (parent to child)
* component did update function - updates the record list
*/
import React from 'react';
import { Container, Row, Button, Col, Table, Card } from 'react-bootstrap';
import '../../App.css';
import APIURL from '../helpers/environment';
import MatchRecordFilter from './MatchRecordFilter';
import MatchCard from './MatchCard';

export default class MatchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MatchRecords: [],
            FilterValue: 'all',
            FilterTitle: '',
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);

    }

    //!  Get Match Records
    fetchMatchRecords() {
        // console.log(`Level Value -  ${APIURL}/match/records/${this.state.FilterValue}`);
        
        fetch(`${APIURL}/match/records/${this.state.FilterValue}`, {            
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

    componentDidUpdate(prevProps, prevState){
        if (prevState.FilterValue !== this.state.FilterValue) {
            this.fetchMatchRecords()
        }
    }

    handleFilterChange(FilterValue) {
        this.setState({FilterValue: FilterValue});
        // console.log(`Level Value -  ${APIURL}/match/records/${this.state.FilterValue}`);
    }
// alignItems:'center', justifyContent:'center',display:'flex'
    render() {
        const rowStyle = {paddingLeft: '5px'};
        const styleScore = {alignItems:'center', justifyContent:'center',display:'flex'};

        return(
            <div className='container' style={{padding:'0'}}>
                <Container className='MatchResultsHeader' style={{paddingBottom:'5px'}}>
                    <h1 style={{color:'whitesmoke',textAlign:'center'}}>
                        MATCH RESULTS
                    </h1>
                </Container>

                <Container style={{backgroundColor:'lightgrey',overflowX:'auto',whiteSpace:'nowrap',alignItems:'center', justifyContent:'center',display:'flex'}}>
                    <MatchRecordFilter FilterTitle={this.state.FilterTitle} FilterValue={this.state.FilterValue} handleFilterChange={this.handleFilterChange} />
                </Container>

                <Container>
                    <div>{this.state.filterOption}</div>
                </Container>
                
                <Container style={{alignItems:'center', justifyContent:'center',display:'flex'}}>
                    <MatchCard MatchRecords={this.state.MatchRecords} WinnerCheckP1={this.state.WinnerCheckP1} callLatest={this.state.callLatest} />
                </Container>
            </div>
        )
    }
};

/**
 * {this.state.MatchRecords.sort((a,b)=>a.MATCH_DATE<b.MATCH_DATE?1:-1).map((MatchRecord, index)=>(
                        <Col key={index+1} sm={6} style={{}}>
                            <Row style={{padding:'5px'}}>
                                <Card>
                                    <Card.Header style={{padding:'0px',backgroundColor:'transparent'}}>
                                        {index+1} ‣ {MatchRecord.MATCH_DATE} ‣ {MatchRecord.LEVEL}
                                    </Card.Header>
                                    <Table style={{}}>
                                        <tbody>
                                            <tr>
                                                <td style={{padding:"0 10px",margin:"0",textAlign:"left"}}>{MatchRecord.PLAYER1}</td>
                                                <td style={{width:'20%',padding:"0",margin:"0"}}>{MatchRecord.PLAYER1_SCORE}</td>
                                            </tr>
                                            <tr>
                                                <td style={{padding:"0 10px",margin:"0",textAlign:"left"}}>{MatchRecord.PLAYER2}</td>
                                                <td style={{width:'20%',padding:"0",margin:"0"}}>{MatchRecord.PLAYER2_SCORE}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card>
                            </Row>
                        </Col>
                    ))}
 */