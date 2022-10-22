import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CardAdmin } from "../components/CardAdmin";
import { Container, Row, Col } from "react-bootstrap";

const AdminPage = () => {
  const [form, setForm] = useState({});
  const [venuecollection, setVenueCollection] = useState([]);
  // const location = useLocation()ode
  const navigate = useNavigate();
  // const { dancevenue, address, coverfee, date, weekly, workshop, dance, image, telephone, email, category, index } = location.state

  // Render Mongo DB collection  using GET Method in the Backend
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}`)
      .then((res) => res.json())
      .then((data) => setVenueCollection(data))
      .catch((err) => console.error(err));
    console.log("Getting Data");
    console.log(venuecollection);
  }, []);

  const allVenues = venuecollection.map((venue, index) => {
    return <CardAdmin key={venue._id} venue={venue} index={index} />;
  });

  // Test Event
  const testNewForm = {
    dancevenue: "Dania Beach Casino Latin Thursdays",
    Address: "301 E Dania Beach Blvd, Dania Beach, FL 33004",
    coverfee: "no cover",
    date: "2022-09-21T09:00:00.000Z",
    weekly: true,
    workshop: "Salsa",
    dance: "Bachata",
    image:
      "https://d33wubrfki0l68.cloudfront.net/6e52a8769c1b6d4a4cc09d4c58f07c67061e54bf/399c6/images/tango.png",
    telephone: "954-920-1511",
    email: "https://www.casinodaniabeach.com/",
    category: "event",
  };

  // Test New Blog Entry
  const testAddEvent = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/add?`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testNewForm),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    console.log("Test Data Added");
    alert("Test Data Added");
  };

  // ADD EVENT FORM
  const addEvent = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/add?`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    console.log("Event Added");
    alert("Event Added");
  };

  // Update
  // const editVenue = (e) => {
  //   e.preventDefault();
  //   fetch(
  //     `${process.env.REACT_APP_API_ENDPOINT}/update/?dancevenue=${allVenues.dancevenue}`,
  //     {
  //       // <-------- reference  root
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form), // <--------   Info to be added /
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => navigate("/"))
  //     // .then(() => setForm(form)) // <------------  Info to be added
  //     .catch((err) => console.log(err));
  //   console.log("Dance Event Updated");
  // };

  return (
    <div>
      <h5 className="h5-adminpage">
        <b>Site Administrator Form </b>
      </h5>
      <Container >
        <Row>
          <Col className="column" xs={1}>
            <div className="form-container">
              <h6>Add Event: </h6>
              <form className="add-form">
                <label>
                  <b>
                    <i>Add : Dance Event : = </i>
                  </b>
                </label>
                <input
                  type="text"
                  placeholder="Hollywood Live"
                  onChange={(e) => {
                    setForm({ ...form, dancevenue: e.target.value });
                  }}
                />
                <br />

                <label>
                  <b>
                    <i>Add : Address : = </i>
                  </b>
                </label>
                <input
                  type="text"
                  placeholder="ex. 123 Flaggler Ave."
                  onChange={(e) => {
                    setForm({ ...form, address: e.target.value });
                  }}
                />
                <br />
                <label>
                  <b>
                    <i>Add : Cover Fee : = </i>
                  </b>
                </label>
                <input
                  type="text"
                  placeholder="ex. $15.00"
                  onChange={(e) => {
                    setForm({ ...form, coverfee: e.target.value });
                  }}
                />
                <br />

                <label>
                  <b>
                    <i>Add : Date : = </i>
                  </b>
                </label>
                <input
                  type="text"
                  placeholder="ex. Date"
                  onChange={(e) => {
                    setForm({ ...form, date: e.target.value });
                  }}
                />
                <br />
                <label>
                  <b>
                    <i>Add : Weekly Event : = </i>
                  </b>
                </label>
                <input
                  type="text"
                  placeholder="ex. true"
                  onChange={(e) => {
                    setForm({ ...form, weekly: e.target.value });
                  }}
                />
                <br />
                <label>
                  <b>
                    <i>Add : Promo Photo : = </i>
                  </b>
                </label>
                <input
                  type="text"
                  placeholder="Promo Photo URL Here..."
                  onChange={(e) => {
                    setForm({ ...form, image: e.target.value });
                  }}
                />
                <br />

                <label>
                  <b>
                    <i>Add : Workshop: = </i>
                  </b>
                </label>
                <input
                  type="text"
                  placeholder="ex. Salsa"
                  onChange={(e) => {
                    setForm({ ...form, workshop: e.target.value });
                  }}
                />
                <br />

                <label>
                  <b>
                    <i>Add : Dance : = </i>
                  </b>
                </label>
                <input
                  type="text"
                  placeholder="ex. Bachata"
                  onChange={(e) => {
                    setForm({ ...form, dance: e.target.value });
                  }}
                />
                <br />
                <label>
                  <b>
                    <i>Add : Telephone : = </i>
                  </b>
                </label>
                <input
                  type="text"
                  placeholder="ex. 555-555-5555"
                  onChange={(e) => {
                    setForm({ ...form, telephone: e.target.value });
                  }}
                />
                <br />

                <label>
                  <b>
                    <i>Add : Email : = </i>
                  </b>
                </label>
                <input
                  type="text"
                  placeholder="ex. me@myemail.com"
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                  }}
                />
                <br />
                <label>
                  <b>
                    <i>Add : Category: = </i>
                  </b>
                </label>
                <input
                  type="text"
                  placeholder="ex. event, instructor or school"
                  onChange={(e) => {
                    setForm({ ...form, category: e.target.value });
                  }}
                />
                <br />
                <button onClick={() => addEvent()}>Add Event</button>
                <br />
                {/* <button onClick={() => editVenue()}>Update Event</button> */}
              </form>

              <button onClick={() => testAddEvent()}>Test Event</button>
            </div>
          </Col>
          <Col className="column" xs={8}>
            <div className="venues">{allVenues}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminPage;
