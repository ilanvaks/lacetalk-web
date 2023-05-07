import { useEffect } from "react"

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
                <img src={sneaker.poster} alt="" />
                <p className="season-container">Sneakers: {sneakers.brand}</p>
              </div>
            )
          )
      }
    </div>
    </>
  )
}