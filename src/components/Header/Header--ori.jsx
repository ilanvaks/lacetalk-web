import { HashLink } from "react-router-hash-link";
import {Container, Row, Col} from 'react-bootstrap';
import "../../styles/Header.css"


export default function Header() {

  return (
    <main>
      <Container fluid className="header-container p-5" id="intro">
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={{span:4, offset: 2}}
          lg={{span: 3, offset:4 }}
          xl={{span: 4, offset: 3}}
          md={{span: 6, offset: 3}}
          className="p-4">
             <h1 className="starter-header text-center text-lg-start"><span>Welcome to </span> LaceTalk</h1>
              <p className="info-header">The place where sneaker collectors from all over the world can come together and collectively share info.</p>
              <HashLink 
                to="/#collection" 
                className="hash-link-button button-effect-collection"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: 'white',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  border: 'solid white 1px'
                }}
              >
                COLLECTION
              </HashLink>

          </Col>
      </Row>
      </Container>
    </main>
  )
}