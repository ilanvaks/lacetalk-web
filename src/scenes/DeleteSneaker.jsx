import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import { Button, Toast } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import "../../src/styles/DeleteSneaker.css";

export default function DeleteSneaker({ sneakerId, setSneakers, showModal, setShowModal }) {
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();

    fetch(`https://lacetalk-iv.web.app/sneaker/${sneakerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setSneakers(data);
        setShowModal(false)
        toast.success("Sneaker has been deleted")
      })
      .catch((error) => {
      console.error(error)
      toast.error("Failed to delete.")
      }) 
  };

  return (
    <div>
      <Button
        className="trash-button bg-primary"
        size=""
        onClick={handleDelete}
        variant="text"
      >
        <Trash size={"30px"} /> <span> Button </span>
      </Button>
    </div>
  );
}
