import { Container, Nav, Navbar } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "../../styles/NavMenu.css";

export default function NavMenu({ user, setUser }) {
  const firebaseConfig = {
    apiKey: "AIzaSyBXx4a0qXtMEOhHsqDjEOgvu_tyCtDcA9c",
    authDomain: "lacetalk-web-iv.firebaseapp.com",
    projectId: "lacetalk-web-iv",
    storageBucket: "lacetalk-web-iv.appspot.com",
    messagingSenderId: "16978065296",
    appId: "1:16978065296:web:35f905c632c7d903dda515",
  };

  const navigate = useNavigate();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(false);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="brand-container"  as={Link} to="/">
          <img src="./images/banner.png" alt="" /></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {!user ? (
            <Nav.Link className="right-container" as={Link} to="/Login">
              Add Sneaker
            </Nav.Link>
          ) : (
            <Nav.Link className="right-container" as={Link} to="/AddSneaker">
              Add Sneaker
            </Nav.Link>
          )}
          {!user ? (
            <Nav.Link className="right-container" as={Link} to="/Login">
              Login
            </Nav.Link>
          ) : (
            <>
              <Nav.Link className="right-container" style={{ pointerEvents: "none" }}>
                {user.displayName}
              </Nav.Link>
              <Nav.Link className="right-container" as={Link} onClick={handleLogout}>
                Logout
              </Nav.Link>
            </>
          )}
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
