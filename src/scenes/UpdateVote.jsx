import React from "react";
import { Button } from "react-bootstrap";
import { IoMdThumbsUp as ThumbsUp, IoMdThumbsDown as ThumbsDown } from 'react-icons/io'
import "../styles/UpdateVote.css"
import { getAuth } from "firebase/auth";

export default function UpdateVote({ sneakerId, sneaker, setSneakers }) {
  const auth = getAuth();

  const voteUp = async () => {
    if (!auth.currentUser) {
      alert("Please log in to vote");
      return;
    }
    try {
      const response = await fetch(
        `https://lacetalk-iv.web.app/sneakers/${sneakerId}/voteUp`,
        { method: "POST" }
      );
      const data = await response.json();
      setSneakers(data);
      // setThumbsUp(data.value.thumbsUp); // Updated line
    } catch (error) {
      console.error("Error voting up:", error);
    }
  };

  const voteDown = async () => {
    if (!auth.currentUser) {
      alert("Please log in to vote");
      return;
    }
    try {
      const response = await fetch(
        `https://lacetalk-iv.web.app/sneakers/${sneakerId}/voteDown`,
        { method: "POST" }
      );
      const data = await response.json();
      setSneakers(data);
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
