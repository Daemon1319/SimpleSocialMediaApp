import { useState } from 'react'

function PostForm({ onAddPost }) {
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)

  function handleImageUpload(e) {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!content.trim() && !image) {
      return
    }

    const newPost = {
      id: crypto.randomUUID(),
      content: content,
      image: image,
      date: new Date().toISOString(),
    }

    onAddPost(newPost)
    setContent('')
    setImage(null)
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's are your thoughts?"
      />

      {image ? (
        <div className="image-preview">
          <img src={image} alt="Preview" />
          <button type="button" className="remove-image" onClick={() => setImage(null)}>
            ✕
          </button>
        </div>
      ) : null}

      <div className="form-actions">
        <label className="file-upload">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <span>Choose Image</span>
        </label>
        <button type="submit">Post</button>
      </div>
    </form>
  )
}

export default PostForm