import React from 'react';
import './PostCard.css';
import { Link } from 'react-router-dom';

function PostCard(props) {
  const {id, title, body, userId, reactions, tags } = props.post;

  return (
    <Link to = {`/post/${id}`} className='post-link'>
    <div className="post-card">
    
        <header className='card-header'>
        <h2>{title}</h2>
        <p>{body}</p>
      </header>
      
      

     <div>
      <div className="sub-data">
        <span>User: {userId}</span>
        <span>
          Likes: {reactions?.likes}, Dislikes: {reactions?.dislikes}
        </span>
      </div>
      <div className="tags">
        {tags?.map((tag, idx) => (
          <span key={idx} className="tag">#{tag}</span>
        ))}
      </div>
     </div>
      
    </div></Link>
    
  );
}

export default PostCard;