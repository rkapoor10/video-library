import "./App.css";
import Router from "./router/Router";
import { Link } from "react-router-dom";
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
        </div>
      </div>

      <div className="pg-footer-layout">
        <Footer />
      </div>
    </div>
  );
}

export default App;
