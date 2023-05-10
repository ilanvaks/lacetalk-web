import { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Button, Image } from 'react-bootstrap';
import { BiTrash } from 'react-icons/bi'
import Gallery from "../components/Gallery"
import DeleteSneaker from './DeleteSneaker';

export default function Home({ sneakers, setSneakers }) {
  useEffect(() => {
    fetch("https://lacetalk-iv.web.app/sneaker")
      .then((resp) => resp.json())
      .then(setSneakers)
      .catch(alert);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedSneaker, setSelectedSneaker] = useState(null);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = (sneaker) => {
    setSelectedSneaker(sneaker);
    setShowModal(true);
  };

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
              {sneakers.map((sneaker) => (
                <Col key={sneaker._id} sm={12} md={6} lg={4} className="main-container">
                  <div className="show-container button-effect">
                    <h2>{sneaker.title}</h2>
                    <Image 
                    fluid
                      className="sneakers-picture"
                      src={sneaker.poster}
                      alt=""
                      onClick={() => handleModalShow(sneaker)}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        }
      </div>

      {selectedSneaker &&
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sneaker Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div key={selectedSneaker._id}>
              <h2>{selectedSneaker.title}</h2>
              <Image fluid className="sneakers-picture-modal" src={selectedSneaker.poster} alt="" />
              <h2>{selectedSneaker.link}</h2>
              <p>{selectedSneaker.release}</p>
              <p>{selectedSneaker.brand}</p>
              <p>{selectedSneaker.about}</p>
              <DeleteSneaker taskId={selectedSneaker._id} sneakers={sneakers} setSneakers={setSneakers} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  )
} 
