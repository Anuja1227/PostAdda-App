import React from 'react';
import './PostCard.css';
import { Link } from 'react-router-dom';
import ReadMore from './ReadMore';

function PostCard(props) {
  const {id, title, body, userId, reactions, tags } = props.post;

  return (

    <div className="post-card">

       <Link to={`/post/${id}`} className="post-link">
      <header className='card-header'>
        <h2>{title}</h2>
        </header>
          </Link>

        <p className='read-more-container'>
          <ReadMore text = {body} maxChars={100} />
        </p>
      
      
      
 
       <Link to={`/post/${id}`} className="post-link">
     <div>
      <div className="sub-data">
        <span>User: 👤{userId}</span>
        <span>
          Likes: 👍{reactions.likes}, Dislikes: 👎{reactions.dislikes}
        </span>
      </div>
      <div className="tags">
        {tags.map((tag, idx) => (
          <span key={idx} className="tag">#{tag}</span>
        ))}
      </div>
     </div>
    </Link>
    </div>
    
  );
}

export default PostCard;