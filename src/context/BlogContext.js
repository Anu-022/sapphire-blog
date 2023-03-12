import { useState, createContext, useEffect } from "react";
import { collection, query, orderBy, addDoc, getDocs, doc, updateDoc} from "firebase/firestore";
import {db} from '../firebase'
const BlogContext = createContext()

export const BlogProvider = ({children}) => {
    const [data, setData] = useState([]);
    const[isLoading, setIsLoading] =useState(true);  
    const [searchTerm, setSearchTerm] =useState('');
    const [filteredPost, setFilteredPost] = useState([]);

    
// Fetch Blogs from  Firebase
    useEffect(()=> {
        setTimeout(() => {
        getBlogs();
        }, 1000);
    
    }, []);

    const getBlogs = async () => {
        const blogRef = query(collection(db,"blogs"), orderBy('date', 'desc'))
        await getDocs(blogRef)
        .then ((querySnapShot) =>{ 
            const newData =querySnapShot.docs.map((doc)=> ({
                ...doc.data(),id: doc.id})
            )
            setData(newData)
            setIsLoading(false);
            console.log(data, newData)
            })
        
    }
    
    // function to grab the  query entered by the user
    function handleSearch(search) {
        setSearchTerm(search);
    } 
    

    // function to handle blog  search Filter
    useEffect(()=> {
        if (searchTerm.length) {
            const filterPost = data.filter((blog) => {
                return (blog.title).toLowerCase().includes(searchTerm.toLowerCase());
            })
            setFilteredPost(filterPost);
        } else {
            setFilteredPost([]);
        }
    }, [searchTerm, data])
    

    // function to add new blogpost

    const addBlog = async (newBlog) => {
        const blogRef = (collection(db,"blogs"))
       await addDoc(blogRef, newBlog)
       setData([...data, newBlog])
    }



    // function to update the number of likes on blog

    const  handleLikes = async (likeId, getLikes) => {
        const blogRef = doc(db,"blogs", likeId)
       await updateDoc(blogRef, {
        likes: getLikes,
       })
    }


    return <BlogContext.Provider value ={{data, isLoading,searchTerm,filteredPost, handleSearch, addBlog, handleLikes}}> {children}</BlogContext.Provider>
}

export default BlogContext;