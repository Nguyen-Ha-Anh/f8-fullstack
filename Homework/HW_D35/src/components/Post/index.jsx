import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  const fetchPosts = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      const res = await axios.get('https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/post/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      setPosts(res.data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.warn('loading..het han token, doi ti');
        await refreshToken();
      } else {
        setError('error');
        console.error(err);
      }
    }
  }
  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');

      const res = await axios.post('https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login/get_new_token/', {
        refresh: refreshToken,
      })

      const {accessToken} = res.data;
      localStorage.setItem('accessToken', accessToken);

      await fetchPosts();
    }  catch (err) {
      console.error('khong duoc, thu lai di', err)
      setError('error');
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>POST</h1>
      {error && <p>{error}</p>}
      <ul>
        {posts.map((post, index) => {
          <li key={index}>{JSON.stringify(post)}</li>
        })}
      </ul>
    </div>
  )
}

export default Post;
