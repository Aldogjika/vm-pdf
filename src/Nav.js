import React, { useState, useEffect } from "react";
import "./Nav.css";
import Logo from "./logo/Netflix_Logo_RGB.png";
import Avatar from "./logo/avatar.png";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrolling = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };
    window.addEventListener("scroll", scrolling);

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  });

  const handleShow = (showState) => {
    setShow(showState);
  };

  return (
    <div className={`nav ${show && "nav__background"}`}>
      <img src={Logo} alt="Netflix Logo" className="nav__logo" />
      <img src={Avatar} alt="Netflix Logo" className="nav__avatar" />
    </div>
  );
}

export default Nav;
