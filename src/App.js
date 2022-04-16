import "./App.css";
import React from "react";
import Router from "./router/Router";
// import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/shared/navbar/Navbar";
import Footer from "./components/shared/footer/Footer";
import SideMenu from "./components/shared/sidemenu/SideMenu";


function App() {

  return (
    <div className="App ">  
      <div className="pg-layout">
        <div className="pg-header-layout">
          <Navbar />
        </div>
        <div className="pg-sidemenu-layout">
          <SideMenu />
        </div>
        <div className="pg-main-layout">
          {/* <Link to="/mockman">Go to MockMan || </Link>
          <Link to="/home">Home ||</Link>
          <Link to="/history">History ||</Link>
          <Link to="/explore">Video Listing ||</Link>
          <Link to="/watchlater">Watch Later ||</Link>
          <Link to="/auth">Auth ||</Link>
          <Link to="/brokenpath">Broken Link</Link> */}
          <Router />

          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>

      <div className="pg-footer-layout">
        <Footer />
      </div>
    </div>
  );
}

export default App;
