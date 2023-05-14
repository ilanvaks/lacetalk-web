import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function UpdateVote({ sneakerId }) {
  const [thumbsUp, setThumbsUp] = useState(
    Number(localStorage.getItem(`thumbsUp-${sneakerId}`)) || 0
  );
  const [thumbsDown, setThumbsDown] = useState(
    Number(localStorage.getItem(`thumbsDown-${sneakerId}`)) || 0
  );

  useEffect(() => {
    localStorage.setItem(`thumbsUp-${sneakerId}`, thumbsUp);
    localStorage.setItem(`thumbsDown-${sneakerId}`, thumbsDown);
  }, [thumbsUp, thumbsDown, sneakerId]);

  const voteUp = () => {
    setThumbsUp(prevThumbsUp => prevThumbsUp + 1);
  };

  const voteDown = () => {
    setThumbsDown(prevThumbsDown => prevThumbsDown + 1);
  };

  return (
    <div>
      <Button className="voteButton" onClick={voteUp}>Thumb Up {thumbsUp}</Button>
      <Button className="voteButton" onClick={voteDown}>Thumb Down {thumbsDown}</Button>
    </div>
  );
}
