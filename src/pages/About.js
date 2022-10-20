import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";


function About() {
    return (
        <div className="container">
            <div className="card mt-4">
                <div className="card-body">
                    <h2>About: Where to Dance</h2>
                </div>
            </div>
            <br />
            <br />
            <br />
            <Container >
                <Row >
                    <Col >   
                      <Image 
                        fluid                                    
                        alt="171x180"
                        src="https://rafael-reyes-bucket.s3.amazonaws.com/RayLopez-11.jpg" />
                        <h3 className="text-center"> Fun! </h3> 
                    </Col>
                    
                    <Col >   
                      <Image
                        fluid                                       
                        alt="171x180"
                        src="https://rafael-reyes-bucket.s3.amazonaws.com/RayLopez-06.jpg" />
                        <h3 className="text-center"> Enjoy the Music</h3> 
                    </Col>

                    <Col >   
                      <Image 
                        fluid                                      
                        alt="171x180"
                       
                         src="https://rafael-reyes-bucket.s3.amazonaws.com/RayLopez-12.jpg" />
                        <h3 className="text-center"> Live a  Healthier Life </h3> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About