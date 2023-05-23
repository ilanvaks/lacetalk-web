import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
import "../styles/UpdateSneaker.css";
export default function UpdateSneakers({
  sneakerId,
  setSneakers,
  currentTitle,
  currentPoster,
  currentLink,
  currentRelease,
  currentBrand,
  currentAbout,
  currentYoutubeLink,
  setShowModal,
}) {
  const [selectedSneaker, setSelectedSneaker] = useState(false);
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [link, setLink] = useState("");
  const [release, setRelease] = useState("");
  const [brand, setBrand] = useState("");
  const [about, setAbout] = useState("");
  const [thumbsUp, setThumbsUp] = useState(0);
  const [thumbsDown, setThumbsDown] = useState(0);
  const [show, setShow] = useState(false);
  const [youtubeLink, setYoutubeLink] = useState("");

  useEffect(() => {
    setTitle(currentTitle);
    setPoster(currentPoster);
    setLink(currentLink);
    setRelease(currentRelease);
    setBrand(currentBrand);
    setAbout(currentAbout);
    setYoutubeLink(currentYoutubeLink);
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
        setShow(false);
        setShowModal(false);
        toast.success("Sneaker Updated!");
        // resetFormFields()
      })
      .catch(alert);
  };

  return (
    <>
      <button onClick={handleShow} type="submit" className="edit-btn">
        <span class="button__text">Edit</span>
        <span class="button__icon">
          <svg
            // xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            class="svg"
          >
            <line y2="19" y1="5" x2="12" x1="12"></line>
            <line y2="12" y1="12" x2="19" x1="5"></line>
          </svg>
        </span>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        className="d-flex align-items-center"
        size="md"
      >
        <div className="whole-form-card">
          <Modal.Header>
            <h2 className="singup">EDIT</h2>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleShow}>
              <Form.Group className="inputBox">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="inputBox">
                <Form.Label>Poster</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => convertFile(e.target.files)}
                />
              </Form.Group>

              <Form.Group className="inputBox">
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="inputBox">
                <Form.Label>Release</Form.Label>
                <Form.Control
                  type="text"
                  value={release}
                  onChange={(e) => setRelease(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="optionBox">
                <Form.Label>Brand</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option>Choose Brand!</option>
                  <option value="Nike">Nike</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Adidas">Adidas</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="inputBox">
                <Form.Label>About</Form.Label>
                <Form.Control
                  type="text"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="inputBox">
                <Form.Label>YouTube(Optional)</Form.Label>
                <Form.Control
                  type="text"
                  value={youtubeLink}
                  onChange={(e) => setYoutubeLink(e.target.value)}
                />
              </Form.Group>
              <br />

              <button onClick={handleEdit} class="editform-btn">
                <span>
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                    <g
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="#ffffff"
                        d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
                <span>Sure ?</span>
                <span>
                  Done !
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                    <g
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="#ffffff"
                        d="M8.00011 13L12.2278 16.3821C12.6557 16.7245 13.2794 16.6586 13.6264 16.2345L22.0001 6"
                      ></path>{" "}
                      <path
                        fill="#ffffff"
                        d="M11.1892 12.2368L15.774 6.63327C16.1237 6.20582 16.0607 5.5758 15.6332 5.22607C15.2058 4.87635 14.5758 4.93935 14.226 5.36679L9.65273 10.9564L11.1892 12.2368ZM8.02292 16.1068L6.48641 14.8263L5.83309 15.6248L2.6 13.2C2.15817 12.8687 1.53137 12.9582 1.2 13.4C0.868627 13.8419 0.95817 14.4687 1.4 14.8L4.63309 17.2248C5.49047 17.8679 6.70234 17.7208 7.381 16.8913L8.02292 16.1068Z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
              </button>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}
