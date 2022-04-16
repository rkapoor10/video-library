import { useState } from "react";
import "./playlistForm.css";
import Modal from "../../Modal/Modal";
import { usePlaylist } from "../../../context/PlaylistContext/PlaylistContext";
import CreatePlaylistForm from "./CreatePlaylistForm";
import { toast } from "react-toastify";

const PlaylistForm = ({ newVideo }) => {
  console.log({newVideo})
  const { openModal, setOpenModal, playlistState, playlistDispatch } =
    usePlaylist();
  const [createPlaylistModal, setCreatePlaylistModal] = useState(false);

  const playlistCheckboxHandler = (event, playlist) => {
    if (event.target.checked) {
      playlistDispatch({
        type: "ADD_TO_PLAYLIST",
        payload: { id: playlist.id, video: newVideo },
      });
      toast.success(`Added to ${playlist.title}`);
    } else {
      playlistDispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload: { id: playlist.id, video: newVideo },
      });
      toast.success(`Removed from ${playlist.title}`);
    }
  };

  return (
    <>
      <div className="body">
        <ul className="playlists-modal-list playlists-list">
          <button
            className="modal-btns"
            onClick={() => {
              setCreatePlaylistModal(true);
            }}
          >
            Create New Playlist
          </button>
          {playlistState.map((playlist) => {
            return (
              <li key={playlist.id} className="playlists-modal-list-items">
                <input
                  type="checkbox"
                  id={playlist.id}
                  name="item-list"
                  checked={playlist.videos.includes(newVideo)}
                  onChange={(event) => playlistCheckboxHandler(event, playlist)}
                />
                <label htmlFor={playlist.id}>{playlist.title}</label>
              </li>
            );
          })}
          {createPlaylistModal && (
            <Modal
              openModal={openModal}
              setOpenModal={setOpenModal}
              heading={"New Playlist"}
            >
              <CreatePlaylistForm />
            </Modal>
          )}
        </ul>
      </div>
      <div className="footer">
        <button className="modal-btns" onClick={() => setOpenModal(false)}>
          close
        </button>
        <button
          className="modal-btns"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          continue
        </button>
      </div>
    </>
  );
};

export default PlaylistForm;
