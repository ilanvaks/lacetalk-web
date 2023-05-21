import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { IoMdThumbsUp as ThumbsUp, IoMdThumbsDown as ThumbsDown } from 'react-icons/io'
import "../styles/UpdateVote.css"

export default function UpdateVote({ sneakerId, sneaker, setSneakers }) {
  // const [thumbsUp, setThumbsUp] = useState(0);
  // const [thumbsDown, setThumbsDown] = useState(0);

  // useEffect(() => {
  //   // Fetch the current votes when the component mounts
  //   fetchVotes();
  // }, [sneakerId]);

  // const fetchVotes = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://lacetalk-iv.web.app/sneaker/${sneakerId}`
  //     );
  //     const data = await response.json();
  //     setThumbsUp(data.thumbsUp);
  //     setThumbsDown(data.thumbsDown);
  //   } catch (error) {
  //     console.error("Error fetching votes:", error);
  //   }
  // };



  const voteUp = async () => {
    try {
      const response = await fetch(
        `https://lacetalk-iv.web.app/sneakers/${sneakerId}/voteUp`,
        { method: "POST" }
      );
      const data = await response.json();
      setSneakers(data)
      // setThumbsUp(data.value.thumbsUp); // Updated line
    } catch (error) {
      console.error("Error voting up:", error);
    }
  };

  const voteDown = async () => {
    try {
      const response = await fetch(
        `https://lacetalk-iv.web.app/sneakers/${sneakerId}/voteDown`,
        { method: "POST" }
      );
      const data = await response.json();
      setSneakers(data)
      // setThumbsDown(data.value.thumbsDown); // Updated line
    } catch (error) {
      console.error("Error voting down:", error);
    }
  };



  return (
    <div>
      <button className="voteButton" onClick={voteUp}>
        <ThumbsUp /> {sneaker.thumbsUp}
      </button>
      <button className="voteDownButton" onClick={voteDown}>
        <ThumbsDown /> {sneaker.thumbsDown}
      </button>
    </div>
  );
}
