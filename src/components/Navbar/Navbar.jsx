import React from "react";
import logoImg from "../../assets/images/logo.png";
import profileImg from "../../assets/images/profile1.png";
import { FiSearch } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logoImg} alt="logo" className="navbar_logo" />
      <div className="navbar_options">
        <div className="search_box">
          <input type="text" placeholder="Search" />
          <FiSearch className="icon" />
        </div>
        <button className="user primary_btn">
          <img src={profileImg} alt="profile" />
          <span>Superman</span>
        </button>
        <img src={profileImg} alt="profile" className="sm_view_icon"/>
        <RiLogoutCircleRLine  className="sm_view_icon"/>
        <button className="primary_btn">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
