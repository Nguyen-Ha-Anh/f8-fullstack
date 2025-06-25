import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!email || !password) {
      setError('Email and password are required')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    try {
      const res = await axios.post('https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login/', {
        email,
        password
      })

      const { access_token, refresh_token } = res.data
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('refresh_token', refresh_token)
      navigate('/post')
    } catch (err) {
      setError('??? nhap sai roi day')
    }
  }
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="email"
        placeholder="enter ur email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input 
        type="password"
        placeholder="enter ur password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        />

        <button type="submit">Login</button>
        {error && <p style={{color: 'red'}}>{error}</p>}
        {success && <p style={{color: 'green'}}>{success}</p>}
      </form>
    </div>
  )
}

export default Login;