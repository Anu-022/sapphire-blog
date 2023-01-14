import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import CreateBlog from "./components/CreateBlog";
import ReadBlog from "./components/ReadBlog";
import {BlogProvider} from "./context/BlogContext"
function App() {
  return (
        <div className="App">
            <Router> 
              <BlogProvider>
                 <Navbar/>
                        <Routes>
                              <Route exact path='/' element={<Home/>}></Route>
                              <Route exact path='/addBlog' element={<CreateBlog/>}></Route>
                              <Route path='readBlog' element={<ReadBlog/>}></Route>
                        </Routes>
                  </BlogProvider>
            </Router>
              
             
               
            
        </div>
  
    
  )
}

export default App;
