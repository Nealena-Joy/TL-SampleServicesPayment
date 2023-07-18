import React from 'react';
import { Table, Container, Button, Form, ButtonGroup, ToggleButton, Row} from 'react-bootstrap';
import '../../App.css';
import APIURL from '../helpers/environment';


export default class PlayerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterLevel: 'Red',
            PlayerListFilter: 'All',
            radio: '',
            Players: [],
            PlayersByLevel: [],
            Value: '',
            MATCHES_PLAYED: '',
        }

    }

    //!  Get Player List By Level
    fetchPlayersByLevel() {
        console.log("Level Value: ", this.state.filterLevel)
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

    

    render() {
        return (
            <Container Container fluid className='container' style={{overflowY:'auto'}}>
                <Container className='container' style={{paddingBottom:'5px'}}>
                    <Row>
                        <ButtonGroup size='sm'>
                            <Button variant="outline-secondary" onClick={(e)=>this.setState({filterLevel: 'Red'})} >Red</Button>
                            <Button variant="outline-secondary" onClick={(e)=>this.setState({filterLevel: 'Orange'})} value='Orange'>Orange</Button>
                            <Button variant="outline-secondary" onClick={(e)=>this.setState({filterLevel: 'Green'})} value='Green'>Green</Button>
                        </ButtonGroup> 
                    </Row>
                </Container>
                
                <Container>
                    <Row>
                        <Table striped bordered hover style={{textAlign:'Center'}}>
                            <thead>
                                <tr >
                                    <th style={{padding:"0",margin:"0"}}>Rank</th>
                                    <th style={{padding:"0",margin:"0"}}>Name</th>
                                    <th style={{padding:"0",margin:"0"}}>Win</th>
                                    <th style={{padding:"0",margin:"0"}}>Loss</th>
                                    <th style={{padding:"0",margin:"0"}}>Win %</th>
                                    <th style={{padding:"0",margin:"0"}}>Stars</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.PlayersByLevel.sort((a, b) => a.POINTS < b.POINTS ? 1 : -1).map((Player, index) => (
                                    <tr key={index+1}>
                                        <td style={{padding:"0",margin:"0"}}>{index+1}</td>
                                        <td style={{padding:"0",margin:"0"}}>{Player.FIRST_NAME} {Player.LAST_NAME}</td>
                                        <td style={{padding:"0",margin:"0"}}>{Player.MATCHES_WON}</td>
                                        <td style={{padding:"0",margin:"0"}}>{Player.MATCHES_PLAYED-Player.MATCHES_WON}</td>
                                        <td style={{padding:"0",margin:"0",textAlign:"right"}}>{(Player.MATCHES_WON/Player.MATCHES_PLAYED*100).toFixed(0)} %</td>     
                                        <td style={{padding:"0",margin:"0"}}>{Player.POINTS}</td>
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