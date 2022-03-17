import React from "react";
import clsx from "clsx";

import { Link } from "react-router-dom";
import Section from "../components/Section/Section";
import GridContainer from "../components/GridContainer/GridContainer";

const MainLayout = ({ rootClassName, children }) => {
  return (
    <>
      <Section id="navbar">
        <div className="wrapper">
          <Link className="d-inline-flex align-items-center" to="/">
            <img src="./assets/vectors/logo.svg" alt="logo" />
          </Link>

          <div className="main">
            <input type="search" placeholder="Search Here" />

            <div className="nav">
              <Link to="/">Explore</Link>
              <Link to="/">Leader Board</Link>
              <Link to="/">Resources</Link>
              <Link to="/">
                <img src="./assets/imgs/navbar-account.png" alt="my-account" />
                Login
              </Link>
              <Link className="btn btn-gradient" to="/">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <div className={clsx(rootClassName, "main-screen-content")}>
        {children}
      </div>

      <Section id="footer">
        <GridContainer rowClassName="main-row">
          <div className="col-lg-3">
            <img src="./assets/vectors/logo-footer.svg" alt="logo" />

            <p className="py-5">
              Proin ornare auctor lectus sit am et rhoncus. Donec dolor magna,
              vene natis ut posuere vel, porta quis sap ien contect
            </p>

            <div className="social d-flex gap-2">
              <img src="./assets/imgs/social-footer-fb.png" alt="social-fb" />
              <img
                src="./assets/imgs/social-footer-google.png"
                alt="social-google"
              />
              <img
                src="./assets/imgs/social-footer-instagram.png"
                alt="social-instagram"
              />
              <img
                src="./assets/imgs/social-footer-linkedin.png"
                alt="social-linkedin"
              />
              <img
                src="./assets/imgs/social-footer-twitter.png"
                alt="social-twitter"
              />
            </div>
          </div>
          <div className="col-lg-3">
            <p className="lg">QUICK LINKS</p>

            <div className="links">
              <Link to="/">About</Link>
              <Link to="/">Explore</Link>
              <Link to="/">Leader Board</Link>
              <Link to="/">Resources</Link>
            </div>
          </div>

          <div className="col-lg-3">
            <p className="lg">FEATURED</p>

            <div className="links">
              <Link to="/">Featured Drops</Link>
              <Link to="/">Featured Edition</Link>
              <Link to="/">Featured NFTs</Link>
            </div>
          </div>

          <div className="col-lg-3">
            <p className="lg">CONTACT US</p>

            <div className="links">
              <Link to="/">
                <img
                  src="./assets/imgs/contact-footer-phone.png"
                  alt="contact"
                />
                +000-000-000
              </Link>
              <Link to="/">
                <img
                  src="./assets/imgs/contact-footer-email.png"
                  alt="contact"
                />
                demo@example.com
              </Link>
              <Link to="/">
                <img
                  src="./assets/imgs/contact-footer-location.png"
                  alt="contact"
                />
                Lorem ipsum dolor, sit Amet, Contect Etur.
              </Link>
            </div>
          </div>
        </GridContainer>
      </Section>
    </>
  );
};

export default MainLayout;
