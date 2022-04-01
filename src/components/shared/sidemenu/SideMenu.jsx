import react from "react";

const SideMenu = ()=>{
    const menuOptions = ["Home", "Explore", "Playlist", "Watch Later", "Liked", "History", "Settings"]
    return(
        <aside>
            <ul>
                {menuOptions.map((item)=>
                    <li key={item}>{item}</li>
                )}
            </ul>
        </aside>
    )
}

export default SideMenu