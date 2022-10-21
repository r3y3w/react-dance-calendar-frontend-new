import {useState, useEffect } from 'react'
import { CardLearn } from '../components/CardLearn'
import { Container,Row, Col } from 'react-bootstrap'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
import Figure from 'react-bootstrap/Figure'
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion';

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
    const allVenuesStudios =
        venuecollection.filter((venue) => { 
            if (venue.category ==='school')               
           return(venue)}).map((venue, index) => {
               return (< CardLearn key={venue._id} venue={venue} index={index} className="venue-item"/>
                )})
     const allVenuesInstructors =
        venuecollection.filter((venue) => { 
            if (venue.category === 'Instructor')               
           return(venue)}).map((venue, index) => {
               return (< CardLearn key={venue._id} venue={venue} index={index} className="venue-item"/>
                )})
    return(
        <div>
            <br/>
        <Container fluid="md" className="container">
            <Row className='row-top'>
                <Col className='column' > 
                            <Image
                                fluid className="image"
                                alt="171x180"
                                src="https://rafael-reyes-bucket.s3.amazonaws.com/Learn2Dance-01a.webp"/>                          
                            <h3 className="text-center">Fun</h3>
                </Col>
                <Col className='column' >
                             <Image className="image"
                                fluid
                                alt="171x180"
                                src="https://rafael-reyes-bucket.s3.amazonaws.com/Learn2Dance-02a.webp"/>
                            <h3 className="text-center">Enjoy the Music</h3> 
                </Col>
                <Col className='column' >
                            <Image className="image"
                                fluid
                                alt="171x180"
                                src="https://rafael-reyes-bucket.s3.amazonaws.com/Learn2Dance-03a.webp"/>
                            <h3 className="text-center">Live a  Healthier Life</h3>    
                </Col>
            </Row>
            <Row>
            <Col className='column' xs={10} >
                    {/* <br />
                    <br />
                    <br /> */}                    
                <div className="calendar">    
                {/* <Calendar  className="react-calendar" onChange={onChange} value={date} />                    */}
                    {console.log(date)}
                    {/* {date.toString()}  */}
                </div>
                <Accordion className="accordion">                            
                                <Accordion.Item eventKey="0">
                                <Accordion.Header>Dance Studios</Accordion.Header>
                                    <Accordion.Body>
                                         <div className='venues'>{allVenuesStudios}</div>
                                    </Accordion.Body>
                                </Accordion.Item>                                
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Dance Instructors</Accordion.Header>
                                    <Accordion.Body>
                                        <div className='venues'>{allVenuesInstructors}</div>
                                    </Accordion.Body>
                                </Accordion.Item>
                </Accordion>            
                </Col>
            </Row>
        </Container>
                    <br />
                    <br />
                    <br />
        <Container className="container">
                <Row >
                    <Col >   
                      <Image className="image2"
                        fluid
                        title="Photo by Ray Lopez (raylopezphoto.com)"                               
                        alt="Photo by Ray Lopez (raylopezphoto.com)"
                        src="https://rafael-reyes-bucket.s3.amazonaws.com/RayLopez-10.jpg" />
                        <h3 className="text-center"> Fun! </h3> 
                    </Col>
                    
                    <Col >   
                      <Image className="image2"
                        fluid
                        title="Photo by Ray Lopez (raylopezphoto.com)"                                     
                        alt="Photo by Ray Lopez (raylopezphoto.com)"
                        src="https://rafael-reyes-bucket.s3.amazonaws.com/RayLopez-09.jpg" />
                        <h3 className="text-center"> Enjoy the Music</h3> 
                    </Col>

                    <Col >   
                      <Image className="image2"
                        fluid
                        title="Photo by Ray Lopez (raylopezphoto.com)"                                    
                        alt="Photo by Ray Lopez (raylopezphoto.com)"
                        src="https://rafael-reyes-bucket.s3.amazonaws.com/RayLopez-05.jpg" />
                        <h3 className="text-center"> Live a  Healthier Life </h3> 
                    </Col>
                </Row>
            </Container>
    </div>
    )
}

export default Learn2Dance