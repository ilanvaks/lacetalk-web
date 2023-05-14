import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import { HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons"
import "../styles/UpdateVote.css"

export default function VoteComponent({ sneakerId }) {
  const [thumbsUp, setThumbsUp] = useState(localStorage.getItem(`thumbsUp-${sneakerId}`) || 0)
  const [thumbsDown, setThumbsDown] = useState(localStorage.getItem(`thumbsDown-${sneakerId}`) || 0)

  useEffect(() => {
    localStorage.setItem(`thumbsUp-${sneakerId}`, thumbsUp)
    localStorage.setItem(`thumbsDown-${sneakerId}`, thumbsDown)
  }, [thumbsUp, thumbsDown, sneakerId])

  const voteUp = () => {
    setThumbsUp(prevThumbsUp => Number(prevThumbsUp) + 1)
  }

  const voteDown = () => {
    setThumbsDown(prevThumbsDown => Number(prevThumbsDown) + 1)
  }

  return (
    <div>
      <Button className="voteButton" onClick={voteUp}><HandThumbsUp /> {thumbsUp}</Button>
      <Button className="voteButton" onClick={voteDown}><HandThumbsDown /> {thumbsDown}</Button>
    </div>
  )
}
