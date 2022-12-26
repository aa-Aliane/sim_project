import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="nav dark">
      <div className="nav__about">About</div>
      <div className="fs-l fw-medium">Plagiarism detection in scientific writings</div>
      <div className="nav__home">
        <FontAwesomeIcon className="fs-xl" icon={faHouse} />
        <p>Home</p>
      </div>
    </nav>
  );
};

export default Nav;
