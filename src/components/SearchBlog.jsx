import {useContext} from "react";
import BlogContext from "../context/BlogContext";
const SearchBlog = () => {
//const [searchTerm, setSearchTerm] = useState("");

const {handleSearch} = useContext(BlogContext)


    return(
        <>
           <form action="" >
               <input type="search" onChange= {handleSearch} className="search-query" placeholder="Search Blog..."/>  
    
           </form>
        </>
    )




}

export default SearchBlog;