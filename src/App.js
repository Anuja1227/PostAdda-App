import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar';
import PostCard from './PostCard';
import Footer from './Footer';
import Pagination from './Pagination';
import PostDetail from './PostDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [posts, setPost] = useState([]);
  const [currPage, setCurrPage] = useState(1); // to store on what curr page we are at
  const [postPerPage, setPostPerPage] = useState(10); // total post per oage

  useEffect(() => {
    console.log("UseEffect callback called");
    axios.get('https://dummyjson.com/posts?limit=35')
      .then((d) => { setPost(d.data.posts); console.log(d); })
      .catch((error) => console.log('Error fetching data:', error));
  }, []);
// using useEffect to fetch data as side effect wo

  const lastPostIndex = currPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  // first step -> jitne data show krna first page pr, do that and then handle ki baki pages kaise display krana
  const currPosts = posts.slice(firstPostIndex,lastPostIndex);

  return (
    <Router>
      <div className="App">
      <Navbar />
    <Routes>
      <Route path = "/" element = {
        <>
         <div className="posts-container">
        {currPosts.map(post => (  // instead of displaying all data , only currPosts
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination
       totalPosts = {posts.length}
        postsPerPage = {postPerPage} 
        setCurrPage = {setCurrPage}
      currentPage = {currPage}
      />
      </>
      } />

      <Route path = "/post/:id" element = {<PostDetail posts = {posts} />} />
    </Routes>    
      <Footer />
    </div>
    </Router>
    
  );
}

export default App;
