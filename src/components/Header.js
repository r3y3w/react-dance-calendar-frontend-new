import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {


    return (
        <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container>
          <Navbar.Brand  >Where to Dance?</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" variant="tabs">
            <h6><Nav.Link href="/">Find out here</Nav.Link></h6>
              <h6><Nav.Link href="/learn2dance">Learn To Dance</Nav.Link></h6>
              <h6><Nav.Link href="/about">About Us</Nav.Link></h6>   
              {/* <h6><Nav.Link href="/admin-page">Admin Page</Nav.Link></h6>  */}
                          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header