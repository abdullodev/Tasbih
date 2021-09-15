import React from "react";
import { MdRefresh } from "react-icons/md";
const Navbar = ({ isTrue, setIsTrue, setCounter, setCounter1 }) => {
  return (
    <div className="container-fluid bg-primary">
      <div className="row myNavbar">
        <div className="col col1">
          <h3 className="logo">Tasbih</h3>
        </div>
        <div className="col col2">
          <span className="numberClass" onClick={() => setIsTrue(!isTrue)}>
            {isTrue ? 33 : 99}
          </span>
          <MdRefresh
            className="refreshIcon"
            onClick={() => {
              setCounter(0);
              setCounter1(0);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
