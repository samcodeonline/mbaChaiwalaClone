import React from "react";
import logo from "../Assets/logo.png";
import { BsMouse } from "react-icons/bs";
const Misc = () => {
  return (
    <>
      <div className="cursor"></div>
      <a href="/" className="logo">
        <img src={logo} alt="logoHere" data-cursorpointer={true} />
      </a>
      <a href="/franchise" className="franchiseBtn" data-cursorpointer={true}>
        Get A Franchise
      </a>

      <BsMouse className="scrollBtn" data-cursorpointer={true} />
    </>
  );
};

export default Misc;
