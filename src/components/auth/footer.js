import React from 'react';
import { Container } from 'react-bootstrap';
import '../../App.css';

export default class footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div style={{textAlign:'center',padding:'5vh',backgroundColor:'black',color:'whitesmoke'}}>
                <p>© 2024 TennisLab</p>
            </div>
        )
    }
}