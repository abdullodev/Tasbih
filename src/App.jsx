import React, { useState } from "react";
import Button from "./components/Button";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
const App = () => {
  const [isTrue, setIsTrue] = useState(true);
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  return (
    <div className="App">
      <Navbar
        isTrue={isTrue}
        setIsTrue={setIsTrue}
        setCounter={setCounter}
        setCounter1={setCounter1}
      />
      <Content
        isTrue={isTrue}
        counter={counter}
        setCounter={setCounter}
        counter1={counter1}
      />
      <Button
        counter={counter}
        setCounter={setCounter}
        setCounter1={setCounter1}
        counter1={counter1}
      />
    </div>
  );
};

export default App;
