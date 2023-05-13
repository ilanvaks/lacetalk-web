import { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button, Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import DeleteSneaker from "./DeleteSneaker";
import UpdateSneakers from "./UpdateSneakers.jsx";
import "../styles/Home.css";

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
  const handleModalShow = (element) => {
    setSelectedSneaker(element);
    setShowModal(true);
  };

  return (
    <>
      <div className="main-container">
        {!sneakers ? (
          <h1 className="loadingText-container text-center">Loading...</h1>
        ) : (
          <Container fluid>
            <Row className="justify-content-center">
              {sneakers.map((element) => (
                <Col
                  key={element._id}
                  sm={11}
                  md={4}
                  lg={4}
                  className="main-container"
                >
                  <Card className="singledKick-Card">
                    <div className="show-container button-effect">
                      <h2>{element.title}</h2>
                      <Image
                        fluid
                        className="sneakers-picture"
                        src={element.poster}
                        alt=""
                        onClick={() => handleModalShow(element)}
                      />
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </div>

      {selectedSneaker && (
        <Modal
          className="Kick-Modal"
          show={showModal}
          onHide={handleModalClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Sneaker Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div key={selectedSneaker._id}>
              <h2>{selectedSneaker.title}</h2>
              <Image
                fluid
                className="sneakers-picture-modal"
                src={selectedSneaker.poster}
                alt=""
              />
              <h2>{selectedSneaker.link}</h2>
              <p>{selectedSneaker.release}</p>
              <p>{selectedSneaker.brand}</p>
              <p>{selectedSneaker.about}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <DeleteSneaker
              sneakerId={selectedSneaker._id}
              sneakers={sneakers}
              setSneakers={setSneakers}
            />
            <UpdateSneakers
              sneakerId={selectedSneaker._id}
              sneakers={sneakers}
              setSneakers={setSneakers}
            />
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
