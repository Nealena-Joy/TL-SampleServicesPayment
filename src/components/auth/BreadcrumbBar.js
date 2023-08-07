import React from 'react';
import '../../App.css';
import {Breadcrumb, Container, Navbar} from 'react-bootstrap';
import Icon_Rank from '../assets/star.svg';
import Icon_Match from '../assets/racket.svg';
import Icon_Add from '../assets/add2.svg';
import Icon_Profile from '../assets/profile.svg';


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