import { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Button, Image } from 'react-bootstrap';
import Gallery from "../components/Gallery"

export default function Home({ sneakers, setSneakers }) {
  useEffect(() => {
    fetch("https://lacetalk-iv.web.app/sneaker")
      .then((resp) => resp.json())
      .then(setSneakers)
      .catch(alert);
  }, []); 

  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  if (!sneakers) {
    return <h1 className="loadingText-container text-center">Loading...</h1>;
  }

  return (
    <>
    <Gallery/>
      <div className="main-container">
        {!sneakers ? 
          <h1 className="loadingText-container text-center">Loading...</h1>
         :
          <Container>
            <Row className="justify-content-center">
              {sneakers.map((element) => (
                <Col key={element._id} sm={11} lg={3} className="main-container">
                  <div className="show-container button-effect">
                    <h2>{element.title}</h2>
                    <Image 
                    fluid
                      className="sneakers-picture"
                      src={element.poster}
                      alt=""
                      onClick={handleModalShow}
                    />
                    {/* <h2>{element.link}</h2>
                    <h2>{element.release}</h2>
                    <h2>{element.brand}</h2>
                    <h2>{element.about}</h2> */}
                  </div>

                  <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sneaker Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {sneakers.map((element) => (
            <div key={element._id}>
              <h2>{element.title}</h2>
              <Image fluid className="sneakers-picture-modal" src={element.poster} alt="" />
              <h2>{element.link}</h2>
              <p>{element.release}</p>
              <p>{element.brand}</p>
              <p>{element.about}</p>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                </Col>
              ))}
            </Row>
          </Container>
        }
      </div>
        
      
       
    </>
  )
} 
