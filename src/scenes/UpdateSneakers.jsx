import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
import "../styles/UpdateSneaker.css"
export default function UpdateSneakers({
  sneakerId,
  setSneakers,
  currentTitle,
  currentPoster,
  currentLink,
  currentRelease,
  currentBrand,
  currentAbout,
}) {
  const [selectedSneaker, setSelectedSneaker] = useState(false);
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [link, setLink] = useState("");
  const [release, setRelease] = useState("");
  const [brand, setBrand] = useState("");
  const [about, setAbout] = useState("");
  const [thumbsUp, setThumbsUp] = useState(0)
  const [thumbsDown, setThumbsDown] = useState(0)
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTitle(currentTitle);
    setPoster(currentPoster);
    setLink(currentLink);
    setRelease(currentRelease);
    setBrand(currentBrand);
    setAbout(currentAbout);
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };
  function convertFile(files) {
    if (files) {
      // picks the first file from all the files selected
      const fileRef = files[0] || "";
      // picks the type so that it can send the right one to the database
      const fileType = fileRef.type || "";
      // sets reader as a new FileReader instance
      const reader = new FileReader();
      // converts fileref (the File) to a binary string
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev) => {
        // convert it to base64
        setPoster(`data:${fileType};base64,${window.btoa(ev.target.result)}`);
      };
    }
  }

  const handleThumbsUp = () => {
    setThumbsUp(thumbsUp + 1)
  }

  const handleThumbsDown = () => {
    setThumbsDown(thumbsDown + 1)
  }

  const handleEdit = (e) => {
    e.preventDefault();

    fetch(`https://lacetalk-iv.web.app/sneaker/${sneakerId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, poster, link, release, brand, about }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
        setSneakers(data);
        setTitle("");
        setPoster();
        setLink("");
        setRelease("");
        setBrand("");
        setAbout("");
        // resetFormFields()
      })
      .catch(alert);
  };

  return (
    <>
      <Button onClick={handleThumbsUp}>👍 {thumbsUp}</Button>
      <Button onClick={handleThumbsDown}>👎 {thumbsDown}</Button>
      <Button
        className="update-button bg-primary glow-on-hover"
        size="30px"
        onClick={handleShow}
        variant="text"
      >
        <PencilSquare size={30} /> Edit
      </Button>
      <Modal show={show} onHide={handleClose} size="xl">
        <div className="whole-form">
          <Modal.Header>
            <h2>EDIT</h2>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleShow}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Poster</Form.Label>
                <Form.Control
                  type="file"
                  // value={poster}
                  onChange={(e) => convertFile(e.target.files)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Release</Form.Label>
                <Form.Control
                  type="text"
                  value={release}
                  onChange={(e) => setRelease(e.target.value)}
                />
              </Form.Group>
              <br />

              <Form.Select aria-label="Default select example">
                <Form.Label>Brand</Form.Label>
                <option>Choose Brand!</option>
                <option value="1">Nike</option>
                <option value="2">Jordan</option>
                <option value="3">Adidas</option>
                <option value="3"></option>
                onChange={(e) => setBrand(e.target.value)}
              </Form.Select>

              <Form.Group>
                <Form.Label>About</Form.Label>
                <Form.Control
                  type="text"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </Form.Group>
              <br />

              <Button
                className="p-2 btn-lg btn-edit"
                variant="outline-info"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                className="p-2 btn-lg btn-save"
                variant="outline-danger"
                onClick={handleEdit}
              >
                Save
              </Button>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}
