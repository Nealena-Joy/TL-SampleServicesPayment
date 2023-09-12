import React from 'react';
import { Nav } from 'react-bootstrap';
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
            {FilterTitle: 'GREEN', FilterValue: 'Green'},
        ]

        return(
            <Nav variant='underline' defaultActiveKey="0" style={{}}>
            {buttonItems.map((buttonItem,i) => (
                <Nav.Item key={i} style={{display:'inline-block',paddingLeft:'15px'}}>
                    <Nav.Link eventKey={i} onClick={e=>this.props.handleFilterChange(buttonItem.FilterValue)}>{buttonItem.FilterTitle}</Nav.Link>
                </Nav.Item>
            ))}
                <Nav.Item style={{display:'inline-block',paddingLeft:'15px'}}>
                    <Nav.Link href='/match/add'>ADD MATCH</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}