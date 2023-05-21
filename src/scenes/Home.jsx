import { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button, Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Header from "../components/Header/Header";
import ThreeThings from "../components/ThreeThings";
import DeleteSneaker from "./DeleteSneaker";
import UpdateSneakers from "./UpdateSneakers.jsx";
import UpdateVote from "./UpdateVote.jsx"
import Spinner from "react-bootstrap/Spinner";
import Footer from "../components/Footer/Footer";
import "../styles/Home.css";


// export default function Home({ sneakers, setSneakers }) {
  export default function Home() {
  const [sneakers, setSneakers] = useState();
  
  useEffect(() => {
    fetch("https://lacetalk-iv.web.app/sneaker")
      .then((resp) => resp.json())
      .then(setSneakers)
      .catch(alert);
  },[]);

  const [showModal, setShowModal] = useState();
  const [selectedSneaker, setSelectedSneaker] = useState(null);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = (element) => {
    setSelectedSneaker(element);
    setShowModal(true);
  };

  return (
    <>
    <Header />
    <ThreeThings/>
    <br />
    <br />
    <br/>
      <div className="main-container">
        {!sneakers 
        ? <Spinner animation="border" variant="warning" />
        : <Container fluid id="collection">
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
                        <h3 className="mt-3">{element.title}</h3>
                    </div>

                    <UpdateVote sneakerId={element._id} sneaker={element} setSneakers={setSneakers} />
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        }
      </div>

      {selectedSneaker && (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}>
        <Modal
          className="Kick-Modal"
          show={showModal}
          onHide={handleModalClose}
          size="lg"
        >
          <Modal.Header closeButton={handleModalClose}></Modal.Header>
          <Modal.Body className="modal-body1">
              <div key={selectedSneaker._id}>
              <Image
                fluid
                style={{width:"80%"}}
                className="sneakers-picture-modal"
                src={selectedSneaker.poster}
                alt=""
                />
                <h2>Name: {selectedSneaker.title}</h2>
              <a href={selectedSneaker.link}>{selectedSneaker.link}</a>
              <h2>Release: {selectedSneaker.release}</h2>
              <h3>Brand: {selectedSneaker.brand}</h3>
              <p>About: {selectedSneaker.about}</p>
            </div>
            <Modal.Footer>
            <DeleteSneaker
              sneakerId={selectedSneaker._id}
              sneakers={sneakers}
              setSneakers={setSneakers}
              setShowModal={setShowModal}
              />
            <UpdateSneakers
              sneakerId={selectedSneaker._id}
              sneakers={sneakers}
              setSneakers={setSneakers}
              />
            </Modal.Footer>
            </Modal.Body>
        </Modal>
        </div>
      )}
      <Footer/>
    </>
  );
}
