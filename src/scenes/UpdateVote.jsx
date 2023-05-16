import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

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
      <Button className="voteButton" onClick={voteUp}>
        Thumb Up {sneaker.thumbsUp}
        {/* onClick={handleSubmit} */}
      </Button>
      <Button className="voteButton" onClick={voteDown}>
        Thumb Down {sneaker.thumbsDown}
        {/* onClick={handleSubmit} */}
      </Button>
    </div>
  );
}
