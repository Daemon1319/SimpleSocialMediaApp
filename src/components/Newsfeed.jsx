import PostCard from "./PostCard";

function Newsfeed({ posts, onDeletePost, onUpdatePost, username }) {
  return (
    <section className="newsfeed">
      {posts.map(post => (
        <PostCard key={post.id}
          post={post}
          onDeletePost={onDeletePost}
          onUpdatePost={onUpdatePost}
          username={username}
        />
      ))}
    </section>
  )
}

export default Newsfeed