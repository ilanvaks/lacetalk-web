import { useState } from "react";
import { Col, Modal, Image, Button } from "react-bootstrap";

export default function Panel({data: {id,title,info, img}}) {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return(
    <> 
    <Col className=" m-1 bg-info">
    <Image 
      src={img}
      alt={id}
      />
    
    <Button onClick={handleShow}>Open</Button>
    <Modal 
    size="md"
    show={show}
    onHide={handleClose}
    onClick
    className="backdrop-effect">
    <h3> {title}</h3>
    <p>{info}</p>
    </Modal>

    </Col>
    </>
  )
}