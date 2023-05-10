import {Col, Image, Modal, Button} from "react-bootstrap"
import { useState } from "react";

export default function Panel ({data: {id, title, image}}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col className="bg-info m-1" >
      <Image
        src={image}
        alt={id}              
      />
      <Button onClick={handleShow}>Open</Button>
      <Modal
        size="md"
        show={show}
        onHide={handleClose} >
          <h3>{title}</h3>
      <p>info</p>
      <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      </Modal>
      
    </Col>

  )
}