import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import { Trash } from "react-bootstrap-icons";
import "../../src/styles/DeleteSneaker.css";
import { getAuth } from "firebase/auth";

export default function DeleteSneaker({ sneakerId, setSneakers, showModal, setShowModal }) {
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      toast.error("You must be logged in to delete.");
      return;
    }

    const token = await user.getIdToken();

    fetch(`https://lacetalk-iv.web.app/sneaker/${sneakerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "check": localStorage.getItem("check")},
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
    }); 
  };

  
  return (
    <button onClick={handleDelete} class="trash-btn noselect"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
  );
}
