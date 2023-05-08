import { useEffect } from "react"
import { Modal, Button} from "react-bootstrap"
import "../styles/Home.css"

export default function Home ({sneakers, setSneakers}) {
  useEffect( () => {
    fetch("https://lacetalk-iv.web.app/sneaker")
    .then(resp => resp.json())
    .then(setSneakers)
    .catch(alert)
  },[])

  

  return (
    <>
    <h1>Home</h1>
    <div className="main-container">      
      { !sneakers
          ? "Loading..."
          : sneakers.map(
            (element) => (
              <div className="main-container" key={element._id}>
              <div  className="show-container button-effect">
                <h2>{element.title}</h2>
                <img className="sneakers-picture" src={element.poster} alt="" />
                <h2>{element.link}</h2>
                <h2>{element.release}</h2>
                <h2>{element.brand}</h2>
                <h2>{element.about}</h2>
              </div>
              </div>
            )
          )
      }
    </div>
    </>
  )
}