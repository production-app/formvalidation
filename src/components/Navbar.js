import React from "react";

function Navbar() {
  return (
    <div className="navbar navbar-fixed-top custom-navbar" role="navigation">
      <div className="container">
        {/* navbar header */}
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon icon-bar" />
            <span className="icon icon-bar" />
            <span className="icon icon-bar" />
          </button>
          <a
            href="#"
            className="navbar-brand"
            style={{ fontFamily: "Dancing Script", fontWeight: "600" }}
          >
            eValid <em style={{ color: "#f2545f" }}> ! </em>
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#intro" className="smoothScroll">
                Home
              </a>
            </li>
            <li>
              <a href="#overview" className="smoothScroll">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="smoothScroll">
                Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
