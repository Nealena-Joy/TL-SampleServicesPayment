import React from 'react';
import { Container } from 'react-bootstrap';
import '../../App.css';

export default class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <Container style={{marginTop:'10vh'}}>
                <h1>HOME PAGE</h1>
                <h1>Ooops! Page not found :( </h1>
            </Container>
        )
    }
}