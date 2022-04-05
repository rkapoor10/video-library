import { useState } from "react";
import "./playlistCard.css";
import { RiPlayList2Fill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
const PlaylistCard = () => {
  const [playBtn, setPlayBtn] = useState(false);
  return (
    <div className="playlist-card">
      <div className="image-wrapper parent" 
         onMouseEnter={()=>setPlayBtn(true)}
         onMouseLeave={()=>setPlayBtn(false)}
         >
        <img
          className=""
          src="https://i.ytimg.com/vi/3Cs9gQJxsPg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrsrN9ifPxzgnqpk8wURR4QobRdw"
          alt="playlist-image"
        />
        {playBtn ? (
          <div className="playall-btn child-playall">
            <FaPlay />
            <span>PLAY ALL</span>
          </div>
        ) : (
          <div className="count-display child-count">
            <span>count</span> <RiPlayList2Fill />
          </div>
        )}
      </div>
      <div className="content-wrapper-playlist">
        <p className="playlist-title">Playlist name</p>
        <p className="channel-title">channel name</p>
        <p className="playlist-tag">private</p>
        {/* tag(private/public/unlisted) */}
        <button className="view-playlist-btn">VIEW FULL PLAYLIST</button>
      </div>
    </div>
  );
};

export default PlaylistCard