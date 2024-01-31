import React from "react";
function SideBar() {
  return (
    <>
      <div className="sidebar p-2">
        <div className="socials my-auto">
          <a href="#" className="nav-ink">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default SideBar;
