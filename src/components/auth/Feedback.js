import React from 'react';
import '../../App.css';
import {Container} from 'react-bootstrap';


export default class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {        
        return (
            <Container style={{padding:'0', backgroundColor: 'whitesmoke',height:'500rem'}}>
                <p>Feedback:  Coming soon...</p>
            </Container>
        )
    }
}
