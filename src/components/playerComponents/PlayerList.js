import React from 'react';
import { Table, Container, Button, Row, Form, Col, Modal } from 'react-bootstrap';
import '../../App.css';
import APIURL from '../helpers/environment';


export default class PlayerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterMatchType: 'Singles',
            filterLevel: 'Red',
            PlayerListFilter: 'All',
            radio: '',
            Players: [],
            PlayersByLevel: [],
            Value: '',
            MATCHES_PLAYED: '',
            // Filter Modal
            show: false,
            // Filters
            formCheckWinP: true,
            formCheckWins: true,
            formCheckLosses: true,
            formCheckPoints: true,


        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    //!  Get Player List By Level
    fetchPlayersByLevel() {
        // console.log("Level Value: ", this.state.filterLevel)
        fetch(`${APIURL}/player/view/${this.state.filterLevel}`, {            
            method: 'GET', 
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => response.json())
        .then((response) => {
            // console.log("PlayersByLevel:", response.PlayersByLevel);
            this.setState({PlayersByLevel: response.PlayersByLevel})
        })
        .catch((error) => console.log("ERROR! [at fetchPlayersByLevel]:", error))
    }

    componentDidMount(){
        this.fetchPlayersByLevel()
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.filterLevel !== this.state.filterLevel) {
            this.fetchPlayersByLevel()
        }
    }

    //!  TOGGLE FILTER OFFCANVAS
    handleShow(e) {
        this.setState({show: true})
        console.log("handle show:", this.state.show)
    }

    handleClose(e) {
        this.setState({show: false})
    }
    

    render() {
        return (
            <Container fluid className='container' style={{padding:'0', overflowY:'auto'}}>
                <Container className='container' style={{paddingBottom:'5px'}}>
                    <h5>Player Rankings</h5>
                </Container>
                
                <Container>
                    <Row>
                        <Col xs={7}>
                            <h5>{this.state.filterMatchType} - {this.state.filterLevel}</h5>
                        </Col>
                        <Col>
                            <Button size='sm' onClick={this.handleShow}>
                                Filters
                            </Button>
                        </Col>
                    </Row>

                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Filters</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Group>
                                    <Form.Select size="sm" onChange={(e)=>this.setState({filterMatchType: e.target.value})}>
                                        <option>Singles</option>
                                        <option disabled>Doubles</option>
                                    </Form.Select>
                                </Form.Group>
                                <br/>
                                <Form.Group>
                                    <Form.Select size="sm" onChange={(e)=>this.setState({filterLevel: e.target.value})}>
                                        <option value="Red">Red Ball Stage</option>
                                        <option value="Orange">Orange Ball Stage</option>
                                        <option value="Green">Green Ball Stage</option>
                                    </Form.Select>
                                </Form.Group>
                                <br/>
                                <Form.Group>
                                    <Form.Label>Columns</Form.Label>
                                    <Form.Check label="No. of Wins" defaultChecked={this.state.formCheckWins} onChange={e=>this.setState({formCheckWins: !this.state.formCheckWins})}/>
                                    <Form.Check label="No. of Losses" defaultChecked={this.state.formCheckLosses} onChange={e=>this.setState({formCheckLosses: !this.state.formCheckLosses})}/>
                                    <Form.Check label="Win Percent" defaultChecked={this.state.formCheckWinP} onChange={e=>this.setState({formCheckWinP: !this.state.formCheckWinP})}/>
                                    <Form.Check label="Previous Stars/Points" />
                                    <Form.Check label="Current Stars/Points" defaultChecked={this.state.formCheckPoints} onChange={e=>this.setState({formCheckPoints: !this.state.formCheckPoints})}/>
                                </Form.Group>
                            </Modal.Body>
                        </Modal>
                </Container>
                
                <Container>
                    <Row>
                        <Table striped bordered hover style={{textAlign:'Center'}}>
                            <thead>
                                <tr >
                                    <th style={{padding:"0",margin:"0"}}>Rank</th>
                                    <th style={{padding:"0",margin:"0"}}>Name</th>
                                    {this.state.formCheckWins ? <th style={{padding:"0",margin:"0"}}>Win</th> : null}
                                    {this.state.formCheckLosses ? <th style={{padding:"0",margin:"0"}}>Loss</th> : null}
                                    {this.state.formCheckWinP ? <th style={{padding:"0",margin:"0"}}>Win %</th> : null}
                                    {this.state.formCheckPoints ? <th style={{padding:"0",margin:"0"}}>Stars</th> : null}
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.PlayersByLevel.sort((a, b) => a.POINTS < b.POINTS ? 1 : -1).map((Player, index) => (
                                    <tr key={index+1}>
                                        <td style={{padding:"0",margin:"0"}}>{index+1}</td>
                                        <td style={{padding:"0",margin:"0"}}>{Player.FIRST_NAME} {Player.LAST_NAME}</td>
                                        {this.state.formCheckWins ? <td style={{padding:"0",margin:"0"}}>{Player.MATCHES_WON}</td> : null}
                                        {this.state.formCheckLosses ? <td style={{padding:"0",margin:"0"}}>{Player.MATCHES_PLAYED-Player.MATCHES_WON}</td> : null}
                                        {this.state.formCheckWinP ? <td style={{padding:"0",margin:"0",textAlign:"right"}}>{(Player.MATCHES_WON/Player.MATCHES_PLAYED*100).toFixed(0)} %</td> : null}     
                                        {this.state.formCheckPoints ? <td style={{padding:"0",margin:"0"}}>{Player.POINTS}</td> : null}
                                    </tr>
                                ))}

                            </tbody>
                        </Table>
                    </Row>
                </Container>
                <br/>
                <br/>
                <br/>
            </Container>
        )
    }
}

/**
 * 
 */