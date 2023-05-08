import { useState } from "react"
import { Button } from "react-bootstrap"



export default function DeleteSneaker({taskId, sneakers, setSneakers}) {
  
  const handleDelete = () => {

    fetch(`https://lacetalk-iv.web.app/sneaker/${_Id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }, 
    })
      .then(resp => resp.json())
      .then((value) => {
        console.log(itemList)
        setItemList(value)
        console.log(itemList)
        
      })
      .catch(console.error)

      return (
        <>
        <Button onClick={handleDelete} variant="text">
          <Image
            src="https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png"
            width="30px"
          />
        </Button>
       
      </>

      )
     
  }
}