import React from 'react';
import { Container, Row, Button, Col, Breadcrumb, Dropdown } from 'react-bootstrap';
import '../../App.css';
import APIURL from '../helpers/environment';
import BreadcrumbBar from '../auth/BreadcrumbBar.js';


export default class MatchRecords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MatchRecords: [],
            filterOption: ' ',
        }

    }

    //!  Get Match Records
    fetchMatchRecords() {
        console.log("Level Value: ", this.state.filterLevel)
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

    render() {
        return(
            <Container fluid className='container' style={{padding:'0', overflowY:'auto'}}>
                <Container style={{padding:'0'}}><BreadcrumbBar /></Container>
                <Container style={{paddingBottom:'5px'}}>
                    <Row>
                        <Button size='sm' variant="success">MATCH RESULTS</Button>
                    </Row>
                </Container>
                <Container>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
                            Filter
                        </Dropdown.Toggle>
                        <div>{this.state.filterOption}</div>
                        <Dropdown.Menu>
                            <Dropdown.Item defaultChecked href="#/latest" onClick={e=>this.setState({filterOption: 'Latest to Oldest'})}>Latest to Oldest</Dropdown.Item>
                            <Dropdown.Item href="#/review" onClick={e=>this.setState({filterOption: 'Pending Points'})}>For Review</Dropdown.Item>
                            <Dropdown.Item href="#/red" onClick={e=>this.setState({filterOption: 'Red'})}>Red</Dropdown.Item>
                            <Dropdown.Item href="#/orange" onClick={e=>this.setState({filterOption: 'Orange'})}>Orange</Dropdown.Item>
                            <Dropdown.Item href="#/green" onClick={e=>this.setState({filterOption: 'Green'})}>Green</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>

                <Container>

                    
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

            </Container>
        )
    }
};