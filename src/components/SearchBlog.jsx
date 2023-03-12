import {useContext} from "react";
import { useState } from "react";
import BlogContext from "../context/BlogContext";

const SearchBlog = () => {
const {isMatch, searchTerm,handleSearch} = useContext(BlogContext)
     function handleChange(event) {
      const query = event.target.value;
      handleSearch(query)


     }
     
    return(
        <>
           <form action="" >
               <input type="search" value={searchTerm} onChange= {handleChange} className="search-query" placeholder="Search Blog..."/> 
           </form>
           <p className="notification">{isMatch}</p> 
        </>
    )




}

export default SearchBlog;