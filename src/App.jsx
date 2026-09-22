import { useState } from "react"
import Posts from "./data/posts.js"
import Newsfeed from "./components/Newsfeed.jsx"
import PostForm from "./components/PostForm.jsx"

function App() {
  const [posts, setPosts] = useState(Posts)
  const [username, setUsername] = useState('')
  const [nameInput, setNameInput] = useState('')

  if (!username) {
    return (
      <main className="input-username-form">
        <h1>Welcome to Thoughts</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          if (nameInput.trim()) setUsername(nameInput.trim())
        }}>
          <input
            type="text"
            placeholder="Enter your username"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    )
  }

  function handleAddPost(newPost) {
    const postWithAuthor = { ...newPost, author: username }
    setPosts([postWithAuthor, ...posts])
  }

  function handleDeletePost(postId) {
    setPosts(posts.filter(post => post.id !== postId))
  }

  function handleUpdatePost(id, updatedContent) {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, content: updatedContent }
        : post
    ))
  }

  return (
    <main className="app">
      <header>
        <h1>Thoughts?</h1>
        <p>Welcome, {username}!</p>
      </header>
      <PostForm onAddPost={handleAddPost} />
      <Newsfeed
        posts={posts}
        onDeletePost={handleDeletePost}
        onUpdatePost={handleUpdatePost}
        username={username}
      />
    </main>
  )
}

export default App
