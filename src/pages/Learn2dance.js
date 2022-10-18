import {useState, useEffect } from 'react'
import { CardLearn } from '../components/CardLearn'
import { Container,Row, Col } from 'react-bootstrap'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
import Figure from 'react-bootstrap/Figure'
import Image from 'react-bootstrap/Image'

const Learn2Dance = () => {
    const [venuecollection, setVenueCollection] = useState([])
    const [date, setDate] = useState(new Date())
    
    const onChange = date => {	
        setDate(date)
    }
   
    // Render Mongo DB collection
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}`)
            .then((res) => res.json())
            .then((data) => setVenueCollection(data))
            .catch((err) => console.error(err))
        console.log('Getting Data')
        // console.log(venuecollection)
    }, [])

     //Filter event venues, and hide them by default
    const allVenues =
        venuecollection.filter((venue) => { 
            if (venue.category!=='event')               
           return(venue)}).map((venue, index) => {
               return (< CardLearn key={venue._id} venue={venue} index={index} className="venue-item"/>
                )})
    return(
        <div>
            <br/>
        <Container fluid="md">
            <Row className='row-top'>
                <Col className='column' >   
                  
                            <Image
                                fluid
                                alt="171x180"
                                src="https://www.harmonyacademy.net/wp-content/uploads/2021/03/Salsa-lady-styling.jpeg"/>                          
                            <h3 className="text-center">Fun</h3>
                           
               
                </Col>
                <Col className='column' >
                             <Image
                                fluid
                                alt="171x180"
                                src="https://www.saugatuck.com/media/bxhjvuux/social-ballroom-dancing-for-fun.jpg"/>
                            <h3 className="text-center">Enjoy the Music</h3>
                
                   
                </Col>
                <Col className='column' >
                            <Image
                                fluid
                                alt="171x180"
                                src="http://mmsalsainthepark.weebly.com/uploads/4/5/6/5/45650065/4024172_orig.jpg"/>
                            <h3 className="text-center">Live a  Healthier Life</h3>    
                </Col>
            </Row>
            <Row>
                
                <Col className='column' xs={2}>
                    <Calendar showWeekNumbers onChange={onChange} value={date} />
                    {console.log(date)}
                    {date.toString()}                  
                </Col>
                           
                <Col className='column' xs={9} >
                    <div className='venues'>{allVenues}</div>
                    <br />
                    <br />
                    <br />
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Learn2Dance