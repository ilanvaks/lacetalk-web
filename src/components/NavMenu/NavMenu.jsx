import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/NavMenu.css"

export default function NavMenu() {

  return (
    <Navbar className="custom-navbar">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <img
        src="../../../images/shoe360.gif"
        width="180"
        height="180"
        alt="Brand logo"
        />
        <Nav>
          <Nav.Item>
            <Nav.Link as={Link} to="/AddSneaker">Add Kicks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <div className="AboutMe-container">
            <Nav.Link as={Link} to="/AboutMe">About Me</Nav.Link>
            </div>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}