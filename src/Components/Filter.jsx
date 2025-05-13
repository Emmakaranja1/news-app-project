import React, { useState } from "react";

import "./Filter.css";


function Filter({ onCategoryChange, onSearchChange }){
    const [searchQuery, setSearchQuery] = useState("");

     const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearchChange(event.target.value);  // Trigger the parent component to filter based on search
  };

   const handleCategoryClick = (category) => {
    onCategoryChange(category); // Triggers category filter in Home
  };


    return(
        <div className="filter-bar">
        <input 
        type="text"  
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for news..."
        className="search-input"/>


        <div className="categories">
             <button onClick={() => handleCategoryClick("")}>All</button>
        <button onClick={() => handleCategoryClick("business")}>Business</button>
        <button onClick={() => handleCategoryClick("sports")}>Sports</button>
        <button onClick={() => handleCategoryClick("politics")}>Politics</button>
        <button onClick={() => handleCategoryClick("entertainment")}>Entertainment</button>


        </div>
        </div>
        
    );
}
export default Filter;     

