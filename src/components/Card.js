import React, { useState } from "react";
import Score from "./Score";
import Buttons from "./Buttons";
import { data } from "../Data";
function Card() {
  const [counterUp, setCounterUp] = useState(0);
  const [counterDown, setCounterDown] = useState(0);
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomObject = data[randomIndex];

  return (
    <div className="card">
      <Score counterUp={counterUp} counterDown={counterDown} />
      <img src={randomObject.img} alt={randomObject.description} />
      <p className="animalName">{randomObject.description}</p>
      <Buttons
        counterUp={counterUp}
        setCounterUp={setCounterUp}
        counterDown={counterDown}
        setCounterDown={setCounterDown}
        randomObject={randomObject}
      />
    </div>
  );
}

export default Card;
