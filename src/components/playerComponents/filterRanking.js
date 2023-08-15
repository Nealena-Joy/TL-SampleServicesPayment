import React from 'react';
import { Table, Container, Button, Row, Form, Col, Offcanvas } from 'react-bootstrap';
import '../../App.css';
import APIURL from '../helpers/environment';
import BreadcrumbBar from '../auth/BreadcrumbBar.js';

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
        }

    }

    render() {
        return(
            <div>
                
            </div>
        )
    }

}