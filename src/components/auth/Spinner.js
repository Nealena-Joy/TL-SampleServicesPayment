import React, {Component} from 'react';
import '../../App.css';
import {Spinner} from 'react-bootstrap';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    };

    render() {
        return(
            <Spinner animation="border" role="status" style={{animation:'5s'}}> 
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
}