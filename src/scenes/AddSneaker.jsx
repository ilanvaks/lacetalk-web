import { useState } from "react"
import Form from "react-bootstrap"

export default function AddSneaker( {setSneakers} ) {
  const [title, setTitle]= useState("")
  const [poster, setPoster]= useState("")
  const [link, setLink]= useState("")
  const [release, setRelease]= useState("")
  const [brand, setBrand] = useState("")
  const [about, setAbout] = useState("")

  const handleAddKicks= (e) => {
    e.preventDefault()

    fetch("https://lacetalk-iv.web.app/sneaker", {
      method: "POST",
      headers: { "Content-Type": "application/json",
      },
      body: JSON.stringify( {title, poster, link, release, brand, about} )
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.message) { 
        alert(data.message)
        return 
      }
        setSneakers(data)
    })
    .catch(alert)
  }

  return (
    <>
    <div className="whole-form ms-2">
    <h2>Add Kicks</h2>
      <form onSubmit={handleAddKicks}>
        <label htmlFor="title">Title 
          <input
            type="text"
            value={title}
            onChange={ (e) => {setTitle(e.target.value)}} />
            </label>
             < br />

            <label htmlFor="poster">Poster
            <input
            type="text"
            value={poster}
            onChange={ (e) => {setPoster(e.target.value)}} />
            </label>
            <br />

            <label htmlFor="link">Link
              <input
                type="text"
                value={link}
                onChange={ (e) => {setLink(e.target.value)}} />
            </label>
            <br />

            <label htmlFor="Release Date">Release
              <input
                type="text"
                value={release}
                onChange={ (e) => {setRelease(e.target.value)}} />
            </label>
            <br/>

            <label htmlFor="Brand">Brand
              <input
                type="text"
                value={brand}
                onChange={ (e) => {setBrand(e.target.value)}} />
            </label>
            <br/>

            <label htmlFor="About">About
              <input
                type="text"
                value={about}
                onChange={ (e) => {setAbout(e.target.value)}} />
            </label>


          <input type="submit" value="Kick It!" />
      </form>
      </div>
    </>
  )
}


