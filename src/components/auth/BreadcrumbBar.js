import React from 'react';
import '../../App.css';
import {Breadcrumb} from 'react-bootstrap';


export default class BreadcrumbBar extends React.Component {

    render() {
        return(
            <div style={{backgroundColor:'darkgrey',padding:'0 10px'}}>
                <Breadcrumb> 
                    <Breadcrumb.Item href='/home'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href='/rankings'>Rankings</Breadcrumb.Item>
                    <Breadcrumb.Item href='/match-records'>Match Records</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}