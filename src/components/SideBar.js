import React from "react";
import logo from "../assets/logo.png";
function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="logo" href="#home">
          <img src={logo} alt="LOGO" width="80" height="80" />
        </div>
        <div className="socials my-auto">
          <a href="#" className="nav-ink">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default SideBar;
