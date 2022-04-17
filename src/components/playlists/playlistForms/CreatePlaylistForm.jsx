import {useState}from "react";
import "./playlistForm.css";
import { usePlaylist } from "../../../context/PlaylistContext/PlaylistContext";
import {toast} from "react-toastify";

const CreatePlaylistForm = ({ newVideo }) => {
  const { setOpenModal,playlistDispatch } = usePlaylist();
  const [formInput , setFormInput] = useState({title: "", visibility: ""})
  const formSubmitHandler = () => {
    console.log(formInput)
    playlistDispatch({type:"ADD_TO_NEW_PLAYLIST",payload:{...formInput,video:newVideo}})
  }
  return (
    <>
      <div className="body">
        <form className="playlist-form-container" >
          <input
            className="playlist-name"
            type="text"
            name="playlist-name"
            id="playlist-name"
            placeholder="Enter Title"
            onChange={event => setFormInput({...formInput,title:event.target.value})}
          />
          <div className="playlist-visibility">
            <label className="playlist-visibility-radio" htmlFor="visibility">
              <input type="radio" value={"public"} name="visibility" id="visibility" onChange={event=>setFormInput({...formInput,visiblity:event.target.value})}/> Public
            </label>
            <label className="playlist-visibility-radio" htmlFor="visibility">
              <input type="radio" value={"private"} name="visibility" id="visibility" onChange={event=>setFormInput({...formInput,visiblity:event.target.value})}/> Private
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
            formSubmitHandler()
            toast.success(`added video to ${formInput.title}`);
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
