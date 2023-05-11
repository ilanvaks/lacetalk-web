import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/AddSneaker.css"

export default function AddSneaker({ setSneakers }) {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [link, setLink] = useState("");
  const [release, setRelease] = useState("");
  const [brand, setBrand] = useState("");
  const [about, setAbout] = useState("");

  const handleAddKicks = (e) => {
    e.preventDefault();

    fetch("https://lacetalk-iv.web.app/sneaker", {
      method: "POST",
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
      })
      .catch(alert);
  };

  function convertFile(files) {
    if (files) {
      // picks the first file from all the files selected
      const fileRef = files[0] || ""
      // picks the type so that it can send the right one to the database
      const fileType = fileRef.type || ""
      // sets reader as a new FileReader instance 
      const reader = new FileReader()
      // converts fileref (the File) to a binary string
      reader.readAsBinaryString(fileRef)
      reader.onload = (ev) => {
        // convert it to base64
        setPoster(`data:${fileType};base64,${window.btoa(ev.target.result)}`)
      }
    }
  }

  return (
    <div className="whole-form">
      <h2>Add Kicks</h2>
      <Form onSubmit={handleAddKicks}>
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
            onChange={e => convertFile(e.target.files)}
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

        <Button className="kickit-button" variant="primary" type="submit">
          Kick It!
        </Button>
      </Form>
    </div>
  );
}
