import React from 'react';
import { Container, Row, Button, Col, Dropdown } from 'react-bootstrap';
import '../../App.css';


export default class MatchRecordFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {
        const buttonItems = [
            {FilterTitle: 'LATEST', FilterValue: 'All'},
            {FilterTitle: 'FOR REVIEW', FilterValue: 'Pending'},
            {FilterTitle: 'RED', FilterValue: 'Red'},
            {FilterTitle: 'ORANGE', FilterValue: 'Orange'},
            {FilterTitle: 'GREEN', FilterValue: 'Green'}
        ]

        return(
            <div>
            {buttonItems.map((buttonItem,i) => (
                <div key={i} style={{display:'inline'}}>
                    <Button onClick={e=>this.props.handleFilterChange(buttonItem.FilterValue)} size="sm" variant="outline-info">{buttonItem.FilterTitle}</Button>{' '}
                </div>
            ))}
            </div>
        )
    }
}