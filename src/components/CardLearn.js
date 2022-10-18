import { Collapse } from 'react-collapse'
import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

export const CardLearn = ({ venue }) => {

   const [changeView, setChangeView] = useState(false)

    return(

        <div state={venue} to="/" className="venue-item" >                       
        <Card style={{ rem:'18' }}>
        <Card.Img variant="top" style={{ width: '200px', height: '200px' }} src={venue.image} />
        
            <ListGroup className="list-group-flush">
            <ListGroup.Item><h5><b>{venue.dancevenue}</b></h5></ListGroup.Item>
                    <ListGroup.Item><b>Dance: {venue.dance}</b></ListGroup.Item>
                    <ListGroup.Item><b> Address: {venue.address}</b></ListGroup.Item>            
                    <ListGroup.Item><b>Telephone: {venue.telephone}</b></ListGroup.Item>
                    <ListGroup.Item><b>Cover Fee: {venue.coverfee}</b></ListGroup.Item>
                <Collapse isOpened={changeView}>
                    <ListGroup.Item><b>Date: {venue.date}</b></ListGroup.Item>
                    <ListGroup.Item><b>Email: {venue.email}</b></ListGroup.Item>
                    <ListGroup.Item><b>WorkShop: {venue.workshop}</b></ListGroup.Item>
                    <ListGroup.Item><b>Weekly event: {venue.weekly}</b></ListGroup.Item>
                    <ListGroup.Item><b>Category: {venue.category}</b></ListGroup.Item>
                </Collapse>
            </ListGroup>
            <Button variant="link"  style={{ fontSize: 9 }} onClick={() => setChangeView(!changeView)} >
                <a>
                    Event Details
                </a>
            </Button>
        </Card>            
           
       
       
    </div>
    
        
    )


    

}

