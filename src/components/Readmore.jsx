
import { Link } from "react-router-dom";
const Readmore = ({children, blog}) => {

    const text = children;
    

   return (
       <>
           <div className="read-more">
            <p className="blog-body">
            {text.length > 500 ? text.slice(0, 500): text }
            </p>
            
            <p>
              <Link className="readMore-link" state={blog} to= '/readBlog'> Read More...</Link>
            </p> 
            
            
           </div>
       </>
   ) 
   
  
};

export default Readmore;