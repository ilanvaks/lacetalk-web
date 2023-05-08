// import { useState } from "react"
// import { Button } from "react-bootstrap"



// export default function DeleteSneaker({taskId, sneakers, setSneakers}) {
  
//   const handleDelete = () => {
//     const LOL = {
//       taskId,
//       done: true,
//       userId: "me"
//     }

//     fetch(`https://lacetalk-iv.web.app/sneaker/${taskId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json"
//       }, 
//       body: JSON.stringify(LOL)
//     })
//       .then(resp => resp.json())
//       .then((value) => {
//         console.log(itemList)
//         setItemList(value)
//         console.log(itemList)
        
//       })
//       .catch(console.error)
     
     
//   }