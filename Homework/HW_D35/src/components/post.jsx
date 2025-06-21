import { useEffect, useState } from 'react'
import axios from 'axios'

const Post = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchPosts = async () => {
    const access = localStorage.getItem('access_token')

    try {
      const res = await axios.get('https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/post/', {
        headers: {
          Authorization: `Bearer ${access}`
        }
      })
      setPosts(res.data)
    } catch (err) {
      if (err.response?.status === 401) {
        // Token hết hạn → gọi refresh
        const refresh = localStorage.getItem('refresh_token')
        const res2 = await axios.post(
          'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login/get_new_token/',
          { refresh }
        )
        localStorage.setItem('access_token', res2.data.access_token)
        fetchPosts() // gọi lại
      } else {
        alert('Lỗi khi lấy bài viết')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <h1>Post</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((p, idx) => (
            <li key={idx}>{p.title || JSON.stringify(p)}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Post
