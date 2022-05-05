import { updateLocalStorage } from "../../utils/updateLocalStorage"

const videoReducer = (state,action) => {
    const {type,payload} = action
    switch(type){
        case "LIKED_VIDEO":
            updateLocalStorage("likes",[...state.likedVideos, payload])
            return {...state, likedVideos:[...state.likedVideos, payload]}
        case "REMOVE_FROM_LIKED":
            updateLocalStorage("likes",state.likedVideos.filter((video)=>video.id!==payload.id))
            return {...state, likedVideos:state.likedVideos.filter((video)=>video.id!==payload.id)}
        case "ADD_TO_WATCHLATER":
            updateLocalStorage("watchlater",[...state.watchLaterVideos, payload])
            return {...state, watchLaterVideos:[...state.watchLaterVideos, payload]}
        case "REMOVE_FROM_WATCHLATER":
            updateLocalStorage("watchlater",state.watchLaterVideos.filter((video)=>video.id!==payload.id))
            return {...state, watchLaterVideos:state.watchLaterVideos.filter((video)=>video.id!==payload.id)}
        case "ADD_TO_HISTORY":
            updateLocalStorage("history",[...state.history, payload])
            return {...state, history:[...state.history, payload]}
        case "REMOVE_FROM_HISTORY":
            updateLocalStorage("history",state.history.filter((video)=>video.id!==payload.id))
            return {...state, history:state.history.filter((video)=>video.id!==payload.id)}
        default:
            return state
    }
}

export default videoReducer

