import {useState, useEffect } from 'react'
import { CardLearn } from '../components/CardLearn'
import { Container,Row, Col } from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'


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
        <Container fluid="md">
            <Row className='row-top'>
                <Col className='column' >   
                    <Figure>
                            <Figure.Image
                                width={500}
                                height={500}
                                alt="171x180"
                                src="https://joelsalsa.com/wp-content/uploads/2019/02/salsa_ladies_styling_homepage-07.png"
                            />
                            <Figure.Caption>
                            <h5>Fun</h5>
                            </Figure.Caption>
                    </Figure>
                </Col>
                <Col className='column' >
                    <Figure>
                            <Figure.Image
                                width={500}
                                height={500}
                                alt="171x180"
                                src="https://www.saugatuck.com/media/bxhjvuux/social-ballroom-dancing-for-fun.jpg"
                                
                            />
                            <Figure.Caption>
                               <h5>Enjoy the Music</h5>
                            </Figure.Caption>
                    </Figure>
                </Col>
                <Col className='column' >
                <Figure>
                            <Figure.Image
                                width={500}
                                height={500}
                                alt="171x180"
                                src="http://mmsalsainthepark.weebly.com/uploads/4/5/6/5/45650065/4024172_orig.jpg"
                                
                            />
                            <Figure.Caption>
                            <h5>Live a  Healthier Life</h5>
                            </Figure.Caption>
                    </Figure>
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
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Learn2Dance