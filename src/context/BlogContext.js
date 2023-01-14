import { useState, createContext, useEffect } from "react";

const BlogContext = createContext()

export const BlogProvider = ({children}) => {
    const [data, setData] = useState([]);
    const[isLoading, setIsLoading] =useState(true);  
    const [error, setError] = useState(null);


    useEffect(()=> {
        setTimeout(() =>{
            fetch('http://localhost:8000/blogs?_sort=id&_order=desc')
        .then(res => {
            //console.log(res);
            if(!res.ok) {
                throw Error('Could not connect to resource');
            }
           return res.json();
        })
        .then(data => {
            console.log(data);
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((err)=>{
            setError(err.message);
            setIsLoading(false);
        })
        }, 1000);
    
    },[]);

    function handleSearch(event) {
        const filtered =  data.filter((blog) => {
          return blog.title.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setData(filtered);
        if (event.target.value.length < 1) { 
            setData(data);
        }
    }
    const addBlog =async (newBlog) => {
        const res = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newBlog)
        })
            const data = await res.json()
            setData([data, newBlog])
    }
    const  handleLikes =async (likeId, getLikes) => {
        const res = await fetch(`http://localhost:8000/blogs/${likeId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                likes: getLikes
            }
                
            )
        })

    }


    return <BlogContext.Provider value ={{data, isLoading, error, handleSearch, addBlog, handleLikes}}> {children}</BlogContext.Provider>
}

export default BlogContext;