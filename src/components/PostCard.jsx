import { useState } from "react"

function PostCard({ post, onDeletePost, onUpdatePost, username }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(post.content)

  function handleSave() {
    if (!editedContent.trim() && !post.image) {
      return
    }

    onUpdatePost(post.id, editedContent)
    setIsEditing(false)
  }

  function handleCancel() {
    setEditedContent(post.content)
    setIsEditing(false)
  }

  return (
    <article className="post-card">
      <header>
        <strong>{post.author}</strong>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </time>
      </header>

      {isEditing ? (
        <>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          {post.image ? (
            <div className="image-preview">
              <img src={post.image} alt="Post" />
            </div>
          ) : null}
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p>{post.content}</p>
          {post.image ? <img src={post.image} alt="Post" /> : null}
          {post.author === username ? (
            <>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={() => {
                if (window.confirm("Are you sure you want to delete this post?")) {
                  onDeletePost(post.id)
                }
              }}>Delete</button>
            </>
          ) : null}
        </>
      )}
    </article>
  )
}

export default PostCard