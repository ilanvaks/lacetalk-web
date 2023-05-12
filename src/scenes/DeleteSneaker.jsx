import { BsTrash } from 'react-icons/bs';
import { Button } from "react-bootstrap";
import { Trash } from 'react-bootstrap-icons';
import "../../src/styles/DeleteSneaker.css"

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
    <Button className='trash-button bg-primary' size='' onClick={handleDelete} variant="text">
     <Trash size={"30px"} /> <span> Button </span>
    </Button>
  );
}
