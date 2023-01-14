import {useState, useContext} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import BlogContext from "../context/BlogContext";
 const CreateBlog = () => {
    
    const {addBlog} = useContext(BlogContext)   
    

    const [titleError, setTitleError] = useState("");
    const [authorError, setAuthorError] = useState("");
    const [postError, setPostError] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
     
    const [input, setInput] = useState({
        title: "",
        author: "",
        body: "",
    });

    function handleFormInput(e) {
        const value = e.target.value;
        const name = e.target.name;
        setInput({...input,
        [name]: value,
        })
    }

    function submitPost (e) {
     e.preventDefault();
     if(input.title.length < 10)  {
        setTitleError("Blog Title cannot be less than 10 characters");
        setIsDisabled(!isDisabled);
     } if (input.author.length < 5) {
        setAuthorError("Author name should be atleast 5 characters");
        setIsDisabled(!isDisabled);
     }
     if(input.body.length < 30) {
        setPostError("A blog post should contain atleast 30 characters");
        setIsDisabled(!isDisabled);
     }
     else { 
        setIsDisabled(isDisabled);
        const newBlog = {
            title: input.title,
            body: input.body,
            author: input.author,
            likes: 0,
        } 
        console.log(newBlog)
        addBlog(newBlog)
     }
     Navigate('/')

    
    }
   
     
    return (
        <>
        <h2 className="blog-header">Create a New Blog</h2>
            <form onSubmit={submitPost}>
                <div className="blog-title">
                    <input type="text" onChange={handleFormInput} name="title" placeholder=" Enter Blog Title" value={input.title}/>
                    <div className="error-msg">{titleError}</div>
                    <input type="text" onChange={handleFormInput} name="author" placeholder=" Enter Blog Author" value={input.author}/>
                    <div className="error-msg">{authorError}</div>
                </div>
                <textarea name="body" onChange={handleFormInput} className="blog-text"rows={30} cols= {80} value={input.body}/>
                <div className="error-msg">{postError}</div>
                <button type="submit" disabled={isDisabled} className="submit-blog">Post</button>
            </form>   
            
       
        
        
        
        
        </>
    )


}

export default CreateBlog;