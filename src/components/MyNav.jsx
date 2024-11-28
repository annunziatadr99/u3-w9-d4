import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNav = (props) => (
  <Navbar expand="sm" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">{props.logo}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href={props.href}>{props.HrefName}</Nav.Link>
          <Nav.Link href={props.href2}>{props.HrefName2}</Nav.Link>
          <Nav.Link href={props.href3}>{props.HrefName3}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default MyNav;
