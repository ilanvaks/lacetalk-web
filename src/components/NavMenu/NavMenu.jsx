import { Container, Nav, Navbar, NavDropdown,} from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
    <Navbar className="custom-navbar" expand="lg">
      <Container fluid>
        <div className="brand-container">
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </div>       
          <Nav>
            <div className="aal-container">
              <Nav.Item>
                <div className="AboutMe-container">
                  <Nav.Link as={Link} to="/AboutMe" className="nav-link">
                    About Me
                  </Nav.Link>
                </div>
              </Nav.Item>
              <Nav.Link id="basic-nav-dropdown">
                {!user ? 
                  <Nav.Link as={Link} to="/Login">
                    Add Sneaker
                  </Nav.Link>
                 : 
                  <Nav.Link as={Link} to="/AddSneaker">
                    Add Sneaker
                  </Nav.Link>
                }
              </Nav.Link>
              {!user ? 
                <Nav.Item>
                  <div className="Login-Container">
                    <Nav.Link as={Link} to="/Login" className="nav-link">
                      Login
                    </Nav.Link>
                  </div>
                </Nav.Item>
               : 
                <>
                  <Nav.Item>
                    <div className="diplayname-container">
                      {user.displayName}
                    </div>
                  </Nav.Item>
                  <Nav.Link as={Link} onClick={handleLogout}>
                    Logout
                  </Nav.Link>
                </>
              }
            </div>
          </Nav>
       
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
