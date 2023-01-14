import { useLocation } from "react-router";
import {FaThumbsUp} from 'react-icons/fa'

const ReadBlog = ({blog}) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
    return(
        <div className="read-blog">
          <h2 className="readblog-header">Blog Post</h2>
          <div className="card">
            <h2 className="blog-post_title" >{state.title}</h2>
            <p className="blog-author">Written By: {state.author}</p>
            <FaThumbsUp style= {{color:"cornflowerblue"}}/>
            <span className="num-of-likes"> {state.likes} People Likes this Post</span>
            
          </div>
          <div className=" card blog-body">{state.body}</div>
        
        
        </div>
    )
}

export default ReadBlog;