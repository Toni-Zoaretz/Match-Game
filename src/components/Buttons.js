import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
function Buttons({
  counterUp,
  setCounterUp,
  counterDown,
  setCounterDown,
  randomObject,
}) {
  const handleVBtn = () => {
    if (randomObject.rightAnswer === true) {
      setCounterUp(counterUp + 1);
    } else {
      setCounterDown(counterDown + 1);
    }
  };
  const handleXbtn = () => {
    if (randomObject.rightAnswer === false) {
      setCounterUp(counterUp + 1);
    } else {
      setCounterDown(counterDown + 1);
    }
  };

  return (
    <div className="buttonsContainer">
      <button className="buttons" onClick={handleXbtn}>
        <MdOutlineCancel />
      </button>
      <button className="buttons" onClick={handleVBtn}>
        <GiCheckMark />
      </button>
    </div>
  );
}

export default Buttons;
