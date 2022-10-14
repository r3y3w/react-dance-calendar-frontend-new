import { Collapse } from "react-collapse";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


export const CardAdmin = ({ venue }) => {
//   const [form, setForm] = useState({});
  const [changeView, setChangeView] = useState(false);

  const deleteEvent = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/delete?_id=${venue._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    console.log("Event Deleted");
     alert("Event Deleted");
  };

  const editEvent = (e) => {
    // alert(venue._id);
    e.preventDefault();
    const updateVenue = { CoverFee: '$25.00'  }

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/update?_id=${venue._id}`, {
      // <-------- reference  root
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateVenue), // <--------   Info to be added /
    })
      .then((res) => res.json())
      //   .then(data => navigate('/'))
    //   .then(() => setForm(form)) // <------------  Info to be added
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    console.log("Dance Event Updated");
  };

  // I sawapped the <Link> tags for <div>

  return (
    <>
      <div to="/admin-page" className="venue-item-admin">               
            <Card style={{ rem:'18' }}>
            <Card.Img variant="top" style={{ width: '90px', height: '90px' }} src={venue.image} />            
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Id: <b>{venue._id}</b></ListGroup.Item>    
                <ListGroup.Item><h6><b>{venue.dancevenue}</b></h6></ListGroup.Item>
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
                    <a>Event Details</a>
                </Button>
                <Button variant="link"  style={{ fontSize: 9 }} onClick={() => deleteEvent(venue.dancevenue)}>
              <a>Delete Event</a>
            </Button>
            <Button variant="link"  style={{ fontSize: 9 }} onClick={() => editEvent(venue.dancevenue)} >
              <a>Edit Event</a>
            </Button>  
        </Card>
       </div> 
    </>
  );
};
