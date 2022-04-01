import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="white footer-container-ec">
        <div className="child-1 footer-top-wrapper">
          <div className="footer-logo">
            <div className="nav-title">
              <div className="nav-logo">
                <img src="./assets/playdesk-logo.png" alt="logo" />
              </div>
              <div className="flex-title">
                <div className="fw-bold basered ">
                  <a href="/index.html">
                    PLAY<span className="baseshade-gray">DESK</span>
                  </a>
                </div>
                <p className="fs-07 basered">A SWIFT-UI PRRODUCT</p>
              </div>
            </div>
          </div>
          <div className="footer-socials gray">
            <li>
              <a href="./">Youtube</a>
            </li>
            <li>
              <a href="./">Instagram</a>
            </li>
            <li>
              <a href="./">Twitter</a>
            </li>
          </div>
        </div>

        <div className="child-2 footer-middle-wrapper">
          <div className="category-flex fw-bold gray">
            <div className="category">
              <Link to="/home">Home |</Link>
            </div>
            <div className="category">
              <Link to="/explore">Explore |</Link>
            </div>
            <div className="category">
              <Link to="/history">History</Link>
            </div>
          </div>
          <div className="category-flex"></div>
        </div>

        <div className="child-3 gray footer-bottom-wrapper">
          <div className="copyright">© 2022 SWIFT-UI | Ritik Kapoor</div>
          <ul className="credits wrapit flex-txt">
            <li>
              <a href="https://swift-uiv1.netlify.app/">Swift UI</a>
            </li>
            <li>
              <a href="http://">Github</a>
            </li>
            <li>
              <a href="http://">Canva</a>
            </li>
            <li>
              <a href="http://">FontAwesome</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
