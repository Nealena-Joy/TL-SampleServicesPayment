import React from 'react';
import '../../App.css';
import { Button, Carousel } from 'react-bootstrap';

export default class DashboardLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        const Cards = [
            {Title:'Rankings',Text:'Check out the player rankings per category (level).', Link:'/rankings', CarouselImage: '../assets/racket.png'},
            {Title:'Match Results',Text:'View and modify match results.', Link:'/match/records'},
            {Title:'Profiles',Text:`Add new players, as well as, view and update a player's profile.`, Link:'/profiles'},
            {Title:'Add Matches',Text:'Easily record a match result.', Link:'match/add'}
        ]
        return(
            <div style={{padding:'0px',margin:'0px'}}>
                <Carousel className='Carousel'>
                        {Cards.map((CardContent,i) => (
                            <Carousel.Item key={i} >
                                <img className="d-block w-100 slide CarouselImage" src={require('../assets/racket.png')} alt='Slide' />
                                    <a href={CardContent.Link}>
                                        <Carousel.Caption className='CarouselCaption' style={{textAlign:'left',paddingLeft:'10px',width:'60%'}}>
                                            <h1>{CardContent.Title}</h1>
                                            <p>{CardContent.Text}</p>
                                            <Button size='sm'>GO</Button>
                                        </Carousel.Caption>
                                    </a>
                            </Carousel.Item>
                            
                        ))}
                </Carousel>
            </div>
        )
    }
}