import { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button, Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import DeleteSneaker from "./DeleteSneaker";
import UpdateSneakers from "./UpdateSneakers.jsx";
import UpdateVote from "./UpdateVote.jsx"
import Spinner from "react-bootstrap/Spinner";
import Footer from "../components/Footer/Footer";
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
          <Spinner animation="border" variant="warning" />
        ) : (
          <Container fluid>
            <Row className="justify-content-center g-4">
              {sneakers.map((element) => (
                <Col
                  key={element._id}
                  sm={11}
                  md={6}
                  lg={4}
                  className="main-container"
                >
                  <Card className="singledKick-Card">
                    <div className="show-container button-effect">
                      <Image
                        fluid
                        className="sneakers-picture"
                        src={element.poster}
                        alt=""
                        onClick={() => handleModalShow(element)}
                        />
                        <h2>{element.title}</h2>
                    </div>

                    <UpdateVote sneakerId={element._id} sneaker={element} setSneakers={setSneakers} />
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
          <Modal.Body>
              <div key={selectedSneaker._id}>
              <Image
                fluid
                className="sneakers-picture-modal"
                src={selectedSneaker.poster}
                alt=""
                />
                <h2>Name:{selectedSneaker.title}</h2>
              <h2>Link:{selectedSneaker.link}</h2>
              <p>Release:{selectedSneaker.release}</p>
              <p>Brand:{selectedSneaker.brand}</p>
              <p>About:{selectedSneaker.about}</p>
            </div>
          
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
            </Modal.Body>
          
        </Modal>
      )}
      <Footer/>
    </>
  );
}
