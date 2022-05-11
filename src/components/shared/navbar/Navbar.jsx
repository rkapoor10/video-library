import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "../../../context/AuthContext/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const {isLogedIn, setIsLogedIn} = useAuth();
  const handleLogout = ()=> {
    setIsLogedIn(false) 
    localStorage.removeItem("user")
  }
  return (
    <header className="navbar-container-flex fixed-navbar">
      <div className="nav-title">
        {/* <GiHamburgerMenu/>   */}
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
          className="search-bar fs-1r dark"
          type="search"
          placeholder="Search for videos, categories and more..."
        />
        <button className="search-btn dark" type="submit">
          <FaSearch title="search" />
        </button>
      </div>
      <div className="navbar-icons">
        <button className="search-btn-alone" type="submit">
          <FaSearch title="search" />
        </button>
        <button
          className="btn btn-padding txt-s btn-solid white login-btn bg-basered"
          onClick={() => isLogedIn? handleLogout() : navigate("/login")}
        >
          {isLogedIn? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
