import React, { memo } from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="nav-main">
      <div className="nav-left">
        <h4 className="nav-logo">THEPHOTOR</h4>
      </div>
      <div className="nav-mid">
        <IoSearch className="nav-icon" />
        <input type="text" />
      </div>
    </div>
  );
};

export default memo(Navbar);
