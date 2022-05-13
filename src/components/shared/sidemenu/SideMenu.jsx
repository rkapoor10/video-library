import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { MdExplore, MdWatchLater } from "react-icons/md";
import {
  RiPlayList2Fill,
  RiSettings4Fill,
  RiHistoryLine,
} from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";

import "./sidemenu.css";

const SideMenu = () => {
  const menuOptions = [
    { name: "Home", icon: <ImHome />, path: "/home" },
    { name: "Explore", icon: <MdExplore />, path: "/explore" },
    { name: "Playlist", icon: <RiPlayList2Fill />, path: "/playlist" },
    { name: "Watch Later", icon: <MdWatchLater />, path: "/watchlater" },
    { name: "Liked", icon: <AiFillLike />, path: "/liked" },
    { name: "History", icon: <RiHistoryLine />, path: "/history" },
    { name: "Settings", icon: <RiSettings4Fill />, path: "/mockman" },
  ];

  const activeStyle = {
    color: "red",
    borderBottom: "0px",
  };


  return (
    <aside className="sidemenu-container sticky-sidemenu">
      <ul>
        {menuOptions.map(({ name, icon, path }) => (
          <NavLink
            to={path}
            key={name}
            className="menu-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div className="menu-icon">{icon}</div>
            <div className="menu-title disable-menu-titles">{name}</div>
          </NavLink>
        ))}
      </ul>
    </aside>
  );
};

export default SideMenu;
