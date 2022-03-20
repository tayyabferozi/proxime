import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import Section from "../../components/Section/Section";

const Navbar = ({ showModal }) => {
  const [isSideNavActive, setIsSideNavActive] = useState();

  const toggleSideNav = () => {
    setIsSideNavActive((prevState) => !prevState);
  };

  return (
    <Section id="navbar">
      <div className="wrapper">
        <Link className="d-inline-flex align-items-center" to="/">
          <img className="logo" src="./assets/vectors/logo.svg" alt="logo" />
        </Link>

        <div className="main hide-sm">
          <input type="search" placeholder="Search Here" />

          <div className="nav">
            <Link to="/explore">Explore</Link>
            <Link to="/leader-board">Leader Board</Link>
            <Link to="/">Resources</Link>
            <a onClick={showModal} href="#0">
              <img src="./assets/imgs/navbar-account.png" alt="my-account" />
              Login
            </a>
            <Link className="btn btn-gradient" to="/">
              Join Now
            </Link>
          </div>
        </div>

        <div className="show-sm">
          <div
            onClick={toggleSideNav}
            className={clsx("menu btn11", { open: isSideNavActive })}
            data-menu="11"
          >
            <div className="icon-left"></div>
            <div className="icon-right"></div>
          </div>
        </div>

        <div className={clsx("sidenav", { open: isSideNavActive })}>
          <div className="links">
            <Link to="/explore">Explore</Link>
            <Link to="/leader-board">Leader Board</Link>
            <Link to="/">Resources</Link>
            <a onClick={showModal} href="#0">
              <img src="./assets/imgs/navbar-account.png" alt="my-account" />
              Login
            </a>
            <Link className="btn btn-gradient" to="/">
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Navbar;
