import { BsTrash } from 'react-icons/bs';
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function DeleteSneaker({ taskId, sneakers, setSneakers }) {
  const handleDelete = (e) => {
    e.preventDefault();

    fetch(`https://lacetalk-iv.web.app/sneaker/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        const updatedSneakers = sneakers.filter((sneaker) => sneaker._id !== taskId);
        setSneakers(updatedSneakers);
      })
      .catch(console.error);
  };

  return (
    <Button onClick={handleDelete} variant="text">
      <BsTrash size={30} />
    </Button>
  );
}
