import React, { memo } from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";

const Navbar = ({handleSearch, value}) => {
  return (
    <div className="nav-main">
      <div className="nav-left">
        <h4 className="nav-logo">THEPHOTOR</h4>
      </div>
      <div className="nav-mid">
        <IoSearch className="nav-icon" />
        <input type="text" value={value} onChange={handleSearch} placeholder="Search" />
      </div>
    </div>
  );
};

export default memo(Navbar);
