import { useParams } from 'react-router-dom';
import './PostDetail.css';
function PostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));
 

  if (!post) return <div>Post not found</div>;

  return (
  <div className="detail-page-container">
    <div className="center-content">
      <div className="post-detail">
        <header className='header'>
          <h2>{post.title}</h2>
        </header>

        <p>{post.body}</p>

        <div className="tagss">
          {post.tags.map((tag, idx) => (
            <span key={idx} className="tagp">#{tag}</span>
          ))}
        </div>

        <div className="subdata">
          <span>User: 👤{post.userId}</span>
          <div className='reaction'>
            <span className='like-box'>👍{post.reactions.likes}</span>
            <span className='dislike-box'>👎{post.reactions.dislikes}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

}

export default PostDetail;