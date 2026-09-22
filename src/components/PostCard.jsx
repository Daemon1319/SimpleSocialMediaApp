import { useState } from "react"

function PostCard({ post, onDeletePost, onUpdatePost, username }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(post.content)

  function handleSave() {
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
        <time>{post.date}</time>
      </header>

      {isEditing ? (
        <>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p>{post.content}</p>
          {post.author === username && (
            <>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={() => onDeletePost(post.id)}>Delete</button>
            </>
          )}
        </>
      )}
    </article>
  )
}

export default PostCard