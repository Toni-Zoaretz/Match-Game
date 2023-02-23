import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
function Score({ counterUp, setCounterUp, counterDown, setCounterDown }) {
  return (
    <div className="score">
      <p className="scoreNumber">
        <BsEmojiSmileUpsideDown className="scoreIcons" /> {counterDown}
      </p>
      <p className="scoreNumber">
        <BsEmojiSmile className="scoreIcons" /> {counterUp}
      </p>
    </div>
  );
}

export default Score;
