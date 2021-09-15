import React from "react";

const Content = ({ isTrue, counter, setCounter, counter1 }) => {
  return (
    <div className="content">
      <div>
        <img src="/images/text.png" alt="Zikr" className="textPng" />
        <span>Total : {counter1}</span>
      </div>
      <span className="counterClass">
        {isTrue
          ? counter < 34
            ? counter
            : setCounter(1)
          : counter < 100
          ? counter
          : setCounter(1)}
        /{isTrue ? 33 : 99}
      </span>
    </div>
  );
};

export default Content;
