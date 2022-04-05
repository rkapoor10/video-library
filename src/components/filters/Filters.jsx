import React from "react"
import "./filters.css"

const Filters = ()=>{
    const filterCategories = [
        "All", "Training", "Matches", "Exercise", "Doubles", "Singles", "Women","Men"
    ]
    return(
        <div className="filters-container">
            <ul className="chips-container">
                {filterCategories.map((category)=>{
                    return <li className="chip">{category}</li>
                })}
            </ul>
        </div>
    )
}

export default Filters