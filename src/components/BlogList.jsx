import Readmore from "./Readmore";
import {FaThumbsUp} from 'react-icons/fa'
import LikeButton from "./LikeButton";
import DateFormat from "./DateFormat"
const BLogList = ({blogs}) => {


return (
    <> 
       <div className="blog-list">
            
            {blogs.map((blog)=> (
                <div className="card" key={blog.id}>
                    <h3 className="blog_title">{blog.title}</h3>
                    <LikeButton key={blog.id} blog={blog}>
                        <FaThumbsUp/>  
                    </LikeButton>
                     <Readmore blog={blog}>{blog.body}</Readmore>
                    <h5 className="author">Written By: {blog.author}</h5>
                    <DateFormat time ={blog.date} />

                </div>
                    
            )
           )}
        </div>

    </>
)


};
export default BLogList;