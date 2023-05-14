import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/NavMenu.css";

export default function NavMenu({ user }) {
  console.log(user)
  return (
    <Navbar className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link as={Link} to="/AddSneaker" className="nav-link">
                Add Kicks
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <div className="AboutMe-container">
                <Nav.Link as={Link} to="/AboutMe" className="nav-link">
                  About Me
                </Nav.Link>
              </div>
            </Nav.Item>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/AddSneaker">
                Add Sneaker
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="AboutMe">
                Action
              </NavDropdown.Item>
            </NavDropdown>
            {!user ? (
              <Nav.Item>
                <div className="Login-Container">
                  <Nav.Link as={Link} to="/Login" className="nav-link">
                    Login
                  </Nav.Link>
                </div>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <div className="diplayname-container">
                  {user.displayName}
                </div>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
        {/* <img
          src="../../../images/shoe360.gif"
          width="180"
          height="180"
          alt="Brand logo"
        /> */}
      </Container>
    </Navbar>
  );
}
