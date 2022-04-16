import { useState } from "react";
import "./playlistCard.css";
import { RiPlayList2Fill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const PlaylistCard = ({playlist}) => {
  const {id,title, channelName, visibility,videos} = playlist
  const navigate = useNavigate()
  const [playBtn, setPlayBtn] = useState(false);
  return (
    <div className="playlist-card">
      <div className="image-wrapper parent" 
         onMouseEnter={()=>setPlayBtn(true)}
         onMouseLeave={()=>setPlayBtn(false)}
         >
        <img
          className=""
          src="https://music.apple.com/assets/meta/apple-music-4d84eb1deedb9217bf940603688603b0.png"
          alt="playlist"
        />
        {playBtn ? (
          <div className="playall-btn child-playall">
            <FaPlay />
            <span>PLAY ALL</span>
          </div>
        ) : (
          <div className="count-display child-count">
            <span className="fw-bold">{videos?.length}</span> <RiPlayList2Fill />
          </div>
        )}
      </div>
      <div className="content-wrapper-playlist">
        <p className="playlist-title">{title}</p>
        <p className="channel-title">{channelName}</p>
        <p className="playlist-tag">{visibility}</p>
        {/* tag(private/public/unlisted) */}
        <button className="view-playlist-btn" onClick={()=>navigate(`/userplaylist/${id}`)}>VIEW FULL PLAYLIST</button>
      </div>
    </div>
  );
};

export default PlaylistCard