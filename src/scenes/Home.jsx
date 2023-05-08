import { useEffect } from "react"
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
            (sneaker) => (
              <div key={sneakers.id} className="show-container button-effect">
                <h2>{sneaker.title}</h2>
                <img className="sneakers-picture" src={sneaker.poster} alt="" />
                <h2>{sneaker.link}</h2>
                <h2>{sneaker.release}</h2>
                <h2>{sneaker.brand}</h2>
                <h2>{sneaker.about}</h2>
                <h2></h2>
                <h2></h2>
              </div>
            )
          )
      }
    </div>
    </>
  )
}