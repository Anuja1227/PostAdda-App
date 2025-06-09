import { useParams } from 'react-router-dom';
import './PostDetail.css';
function PostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-detail">
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      
      <div>
        <p className='tags'><strong>Tags:</strong> {post.tags.join(', ')}</p>
      <p><strong>Reactions:</strong> {post.reactions.likes} Likes, {post.reactions.dislikes} Dislikes</p>
      </div>
      
    </div>
  );
}

export default PostDetail;