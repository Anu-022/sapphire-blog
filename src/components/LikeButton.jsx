import { useState, useContext } from "react";
import BlogContext from "../context/BlogContext";

const LikeButton = ({children,blog}) => {
    const {handleLikes} = useContext(BlogContext)

  const likeId = blog.id;
  let [getLikes, setLikes]= useState(blog.likes);  

  function incrementLikes() {
    setLikes((prevState)=> prevState + 1)
    
    handleLikes(likeId, getLikes)
  }

    return (
        <>
        <button onClick={incrementLikes} className="likes">{children}</button>
        <span className="no_of_likes"> {getLikes} Likes</span>
        </>
        
    )

}
export default LikeButton;