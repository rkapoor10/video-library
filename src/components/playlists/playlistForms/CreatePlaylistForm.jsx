import React from "react";
import "./playlistForm.css";
import { usePlaylist } from "../../../context/PlaylistContext/PlaylistContext";
import {toast} from "react-toastify";

const CreatePlaylistForm = () => {
  const { setOpenModal } = usePlaylist();
  return (
    <>
      <div className="body">
        <form className="playlist-form-container">
          <input
            className="playlist-name"
            type="text"
            name="playlist-name"
            id="playlist-name"
            placeholder="Enter Title"
          />
          <div className="playlist-visibility">
            <label className="playlist-visibility-radio" htmlFor="visibility">
              <input type="radio" name="visibility" id="visibility" /> Public
            </label>
            <label className="playlist-visibility-radio" htmlFor="visibility">
              <input type="radio" name="visibility" id="visibility" /> Private
            </label>
          </div>
        </form>
      </div>
      <div className="footer">
        <button className="modal-btns" onClick={() => setOpenModal(false)}>
          close
        </button>
        <button
          className="modal-btns"
          onClick={() => {
            toast.success("created a new playlist");
            setOpenModal(false);
          }}
        >
          continue
        </button>
      </div>
    </>
  );
};
export default CreatePlaylistForm;
