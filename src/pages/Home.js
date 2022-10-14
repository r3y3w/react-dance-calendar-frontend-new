import {useState, useEffect } from 'react'
import { CardVenue } from '../components/CardVenue'
import { Container,Row, Col } from 'react-bootstrap'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
import Figure from 'react-bootstrap/Figure'


const Home = () => {
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

    //Filter event venues, and show them by default
    const allVenues =
        venuecollection.filter((venue) => { 
            if (venue.category==='event')               
           return(venue)}).map((venue, index) => {
               return (< CardVenue key={venue._id} venue={venue} index={index} className="venue-item"/>
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
                                    src="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/02/shutterstock_575068651-lesinka372-e1488368659535.jpg"
                                />
                                <Figure.Caption>
                                <h5>Fun</h5>
                                </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col className='column' >
                        <Figure>
                                <Figure.Image
                                    width={400}
                                    height={400}
                                    alt="171x180"
                                    src="https://firstworks.org/wp-content/uploads/2022/05/Eddie-Palmieri-Main-Image-600x400-1.jpg"
                                    
                                />
                                <Figure.Caption>
                                <h5>Enjoy the Music!</h5>
                                </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col className='column' >
                    <Figure>
                                <Figure.Image
                                    width={500}
                                    height={500}
                                    alt="171x180"
                                    src="https://images.squarespace-cdn.com/content/v1/537e88a6e4b078fc56661bfc/1527655761428-YVH757WEJNYJ9DANPWSV/ShowImage.jpeg"
                                    
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

export default Home