import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar';
import PostCard from './PostCard';
import Footer from './Footer';

function App() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    console.log("UseEffect callback called");
    axios.get('https://dummyjson.com/posts')
      .then((d) => { setPost(d.data.posts); console.log(d); })
      .catch((error) => console.log('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="posts-container">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
