import { BsTrash } from 'react-icons/bs';
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function DeleteSneaker({ sneakerId, setSneakers }) {
  const handleDelete = (e) => {
    e.preventDefault();

    fetch(`https://lacetalk-iv.web.app/sneaker/${sneakerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(setSneakers)
      .catch(console.error);
  };

  return (
    <Button onClick={handleDelete} variant="text">
      <BsTrash size={30} />
    </Button>
  );
}
