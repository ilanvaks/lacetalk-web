import { HashLink } from "react-router-hash-link";
import {Container, Row, Col, Image} from 'react-bootstrap';
import "../../styles/Header.css"


export default function Header() {

  return (
    <main>
      <Container fluid className="header-container p-5" id="intro">
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={11} md={6}>
            <Image 
              fluid
              src={`${process.env.PUBLIC_URL}/images/pumpup.gif`} />
          </Col>

          <Col sm={11} md={6}>
             <h1 className="header-title text-black starter-header text-center text-lg-start">Kickstarting by bringing Sneakerheads together</h1>
              <p className="info-header text-black">The place where sneaker collectors from all over the world can come together and collectively share info.</p>
              <HashLink 
                to="/#collection" 
                className="hash-link-button button-effect-collection"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: 'black',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  border: 'solid black 1px'
                }}
              >COLLECTION</HashLink>
          </Col>
      </Row>
      </Container>
    </main>
  )
}