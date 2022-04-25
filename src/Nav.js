import React, { useState, useEffect } from "react";
import "./Nav.css";
import Logo from "./logo/Netflix_Logo_RGB.png";
import NewLogo from "./logo/images/logo-version-1.png";
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
      <img src={NewLogo} alt="Netflix Logo" className="nav__logo" />
      <img src={Avatar} alt="Netflix Logo" className="nav__avatar" />
    </div>
  );
}

export default Nav;
