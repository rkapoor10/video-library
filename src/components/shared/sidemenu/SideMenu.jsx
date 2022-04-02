import react from "react";
import { ImHome } from "react-icons/im";
import { MdExplore, MdWatchLater } from "react-icons/md";
import { RiPlayList2Fill, RiSettings4Fill,RiHistoryLine } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";


import "./sidemenu.css";

const SideMenu = () => {
  const menuOptions = [
    { name: "Home", icon: <ImHome /> },
    { name: "Explore", icon: <MdExplore /> },
    { name: "Playlist", icon: <RiPlayList2Fill /> },
    { name: "Watch Later", icon: <MdWatchLater /> },
    { name: "Liked", icon: <AiFillLike /> },
    { name: "History", icon: <RiHistoryLine /> },
    { name: "Settings", icon: <RiSettings4Fill /> },
  ];
  return (
    <aside className="sidemenu-container">
      <ul>
        {menuOptions.map(({ name, icon }) => (
          <li key={name} className="menu-item">
            {" "}
            <div className="menu-icon">{icon}</div>{" "}
            <div className="menu-title">{name}</div>{" "}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideMenu;
