import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostDetail from "./components/PostDetail"

function App() {
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData=async()=>{
      const data=await axios.get('http://localhost:3000/api/posts');
      console.log(data.data);
      console.log(typeof(data.data));
      setPosts(data);
      setLoading(false);
    }
    fetchData();
    
  }, []);


  if(!loading){
  return (
    <>
    
    <Router>
      
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/posts/:id" element={<PostDetail posts={posts} />} />
          
    </Routes>
    
  <hr></hr>
    <Footer/>

  </Router>
    </>

  )
}

}

export default App
