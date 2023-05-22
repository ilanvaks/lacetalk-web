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
import { FaYoutube } from "react-icons/fa";
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
                        <h3 className="card-title mt-3">{element.title}</h3>
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
          className="Kick-Modal d-flex align-items-center"
          show={showModal}
          onHide={handleModalClose}
          size="md"
        >
          <Modal.Body className="modal-body1">
              <div key={selectedSneaker._id}>
              <Image
                fluid
                style={{width:"80%"}}
                className="sneakers-picture-modal d-flex justify-content-center"
                src={selectedSneaker.poster}
                alt=""
                />
                <h2 className="modal-text1">Name: {selectedSneaker.title}</h2>
              <h2 className="modal-text1">Release: {selectedSneaker.release}</h2>
              <h2 className="modal-text1">Brand: {selectedSneaker.brand}</h2>
              <a className="modal-text1" href={selectedSneaker.link}>{selectedSneaker.link}</a>
              <p>About: {selectedSneaker.about}</p>
              {selectedSneaker.youtubeLink && (
            <div>
              <a
                className="modal-text1"
                href={selectedSneaker.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={45} className="youtube-icon"/>
              </a>
            </div>
          )}
            </div>
            <Modal.Footer className="d-flex justify-content-between">
              <div className="del-edit-btn d-flex">
                <div className="update1-btn me-3">
              <UpdateSneakers
              sneakerId={selectedSneaker._id}
              sneakers={sneakers}
              setSneakers={setSneakers}
              setShowModal={setShowModal}
              />
              </div>
              <div className="delete1-btn">
            <DeleteSneaker
              sneakerId={selectedSneaker._id}
              sneakers={sneakers}
              setSneakers={setSneakers}
              setShowModal={setShowModal}
              />
              </div>
            </div>
              <div className="close-modal-btn">
              <Button onClick={handleModalClose}>Close</Button>
              </div>
            </Modal.Footer>
            </Modal.Body>
        </Modal>
        </div>
      )}
    </>
  );
}
