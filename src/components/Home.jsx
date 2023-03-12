 import { useState, useEffect,useContext } from "react";
 import BLogList from "./BlogList";
 import SearchBlog from "./SearchBlog";
 import BlogContext from "../context/BlogContext";
//import useFetch from "./useFetch";
 const Home = () => {
    const {data:blogs, isLoading, error,  filteredPost} = useContext(BlogContext)
   
    return (
    
    <div className="home">
        
        <h2 className="heading">All Blogs</h2> 
           <SearchBlog  blogs= {blogs}/>
        { error && <p className="notification">{error}</p>}
        {isLoading && <p className="notification">Loading....</p>}
        {filteredPost.length ? 
          filteredPost && <BLogList blogs={filteredPost}  /> :   
          blogs && <BLogList blogs={blogs}  />     
        }
 
    
    </div>
    
    )
}
export default Home;