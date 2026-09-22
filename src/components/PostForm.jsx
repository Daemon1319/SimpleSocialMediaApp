import { useState } from 'react'

function PostForm({ onAddPost }) {
  const [content, setContent] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!content) {
      return
    }

    const newPost = {
      id: crypto.randomUUID(),
      content: content,
      date: new Date().toISOString(),
    }

    onAddPost(newPost)
    setContent('')
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's are your thoughts?"
      />
      <button type="submit">Post</button>
    </form>
  )
}

export default PostForm