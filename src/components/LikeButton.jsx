import { useState, useContext, useEffect } from "react";
import BlogContext from "../context/BlogContext";

const LikeButton = ({children,blog}) => {
    const {handleLikes} = useContext(BlogContext)

  const likeId = blog.id;
  let [getLikes, setGetLikes]= useState(blog.likes);  

  function incrementLikes() {
    setGetLikes((prevState)=> prevState + 1)
    //setGetLikes(getLikes + 1)
    
    //handleLikes(likeId, getLikes)
  }

  useEffect( ()=> {
    handleLikes(likeId, getLikes)
  }, [getLikes])

    return (
        <>
        <button onClick={incrementLikes} className="likes">{children}</button>
        <span className="no_of_likes"> {getLikes} Likes</span>
        </>
        
    )

}
export default LikeButton;