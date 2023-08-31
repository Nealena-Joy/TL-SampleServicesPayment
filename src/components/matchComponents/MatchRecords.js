import React from 'react';
import { Container, Row, Button, Col, Dropdown } from 'react-bootstrap';
import '../../App.css';
import APIURL from '../helpers/environment';
import MatchRecordFilter from './MatchRecordFilter';

export default class MatchRecords extends React.Component {
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

    render() {
        const rowStyle = {
            padding: '5px',
        }

        return(
            <Container fluid className='container' style={{padding:'0', overflowY:'auto'}}>
                <Container style={{paddingBottom:'5px'}}>
                    <Row>
                        <Button size='sm' variant="success">MATCH RESULTS</Button>
                    </Row>
                </Container>

                <Container>
                    <MatchRecordFilter FilterTitle={this.state.FilterTitle} FilterValue={this.state.FilterValue} handleFilterChange={this.handleFilterChange} />
                </Container>

                <Container>
                    <div>{this.state.filterOption}</div>
                </Container>

                {this.state.MatchRecords.sort((a,b)=>a.MATCH_DATE<b.MATCH_DATE?1:-1).map((MatchRecord, index)=>(
                <Container key={index+1}>
                    <Container>
                        <Row>
                            <Col xs={8}>{index+1} ‣ Date: {MatchRecord.MATCH_DATE} ‣ {MatchRecord.LEVEL}</Col>
                            <Col xs={1}>Edit</Col>
                        </Row>
                        <Row className="">
                            <Col xs={8}>
                                <Row style={rowStyle} className="square border border-1">{MatchRecord.PLAYER1}</Row>
                                <Row style={rowStyle} className="square border border-1">{MatchRecord.PLAYER2}</Row>
                            </Col>
                            <Col xs={1}>
                                <Row style={rowStyle} className="square border border-1">{MatchRecord.PLAYER1_SCORE}</Row>
                                <Row style={rowStyle} className="square border border-1">{MatchRecord.PLAYER2_SCORE}</Row>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                ))}
{console.log("Filter: ", this.state.FilterValue)}
            </Container>
        )
    }
};