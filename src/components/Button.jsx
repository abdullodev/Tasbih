import React from "react";

const Button = ({ counter, setCounter, setCounter1, counter1 }) => {
  return (
    <div className="buttonClass">
      <button
        onClick={() => {
          setCounter(counter + 1);
          setCounter1(counter1 + 1);
        }}
      >
        {counter}
      </button>
    </div>
  );
};

export default Button;
