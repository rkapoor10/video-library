import react from "react";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar-container-flex bg-white">
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
      <div className="nav-search-box">
        <input
          className="search-bar fs-1r"
          type="search"
          placeholder="Search for videos, categories and more..."
        />
        <button className="search-btn" type="submit">
          <FaSearch title="search" />
        </button>
      </div>
      <div className="navbar-icons">
        <button className="search-btn-alone" type="submit">
          <FaSearch title="search" />
        </button>
        <button className="btn btn-padding txt-s btn-solid white login-btn bg-basered">
          <a href="/login/login.html">Login</a>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
