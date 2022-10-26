import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <div className="container">
      <br />
      <Container className="container">
        <Row>
          <Col>
            <Image
              className="image"
              fluid
              title="Photo by Ray Lopez (raylopezphoto.com)"
              alt="Photo by Ray Lopez (raylopezphoto.com)"
              src="https://rafael-reyes-bucket.s3.amazonaws.com/RayLopez-11.jpg"
            />
            <h3 className="text-center"> Fun! </h3>
          </Col>
          <Col>
            <Image
              className="image"
              fluid
              title="Photo by Ray Lopez (raylopezphoto.com)"
              alt="Photo by Ray Lopez (raylopezphoto.com)"
              src="https://rafael-reyes-bucket.s3.amazonaws.com/RayLopez-06.jpg"
            />
            <h3 className="text-center"> Enjoy the Music</h3>
          </Col>

          <Col>
            <Image
              className="image"
              fluid
              title="Photo by Ray Lopez (raylopezphoto.com)"
              alt="Photo by Ray Lopez (raylopezphoto.com)"
              src="https://rafael-reyes-bucket.s3.amazonaws.com/RayLopez-12.jpg"
            />
            <h3 className="text-center"> Live a Healthier Life </h3>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <p className="paragraph">
            <b>
              <i>Where to Dance?</i>
            </b>{" "}
            is meant to give you a quick reference about local dancing events,
            parties and festivals. These venues are promoted by known dance
            studios, instructors, and DJs local to South Florida.
            Additionally, you will find some events from other cities,
            states, and countries. If you are a beginner to the dancing scene;
            you will find in the{" "}
            <b>
              <i>Learn to Dance </i>
            </b>
            page information about amazing instructors and dances studios. Lets have
            fun with your favorite dance whether be{" "}
            <b>Salsa, Bachata, Kizomba, or Ballroom</b>.
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default About;
