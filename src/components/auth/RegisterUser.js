import React, {Component} from 'react';
import '../../App.css';
import {Form, Button, Container} from 'react-bootstrap';
import APIURL from '../helpers/environment';


export default class RegisterUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginError: '',
            show: '0',
            Authenticated: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    render() {
        return(
            <Container>
                Register User
            </Container>
        )
    }
}