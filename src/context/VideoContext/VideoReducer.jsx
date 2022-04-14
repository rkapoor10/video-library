const videoReducer = (state,action) => {
    const {type,payload} = action
    switch(type){
        case "LIKED_VIDEO":
            return {...state, likedVideos:[...state.likedVideos, payload]}
        case "REMOVE_FROM_LIKED":
            return {...state, likedVideos:state.likedVideos.filter((video)=>video.id!==payload.id)}
        case "ADD_TO_WATCHLATER":
            return {...state, watchLaterVideos:[...state.watchLaterVideos, payload]}
        case "REMOVE_FROM_WATCHLATER":
            return {...state, watchLaterVideos:state.watchLaterVideos.filter((video)=>video.id!==payload.id)}
        case "ADD_TO_HISTORY":
            return {...state, history:[...state.history, payload]}
        case "REMOVE_FROM_HISTORY":
            return {...state, history:state.history.filter((video)=>video.id!==payload.id)}
        default:
            return state
    }
}

export default videoReducer

