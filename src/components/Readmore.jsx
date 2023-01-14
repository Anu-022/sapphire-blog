
import { Link } from "react-router-dom";
const Readmore = ({children, blog}) => {

    const text = children;
    

   return (
       <>
           <div className="read-more">
            {text.length > 500 ? text.slice(0, 500): text }
            <p>
              <Link state={blog} to= '/readBlog'> Read More...</Link>
            </p> 
            
            
           </div>
       </>
   ) 
   
  
};

export default Readmore;