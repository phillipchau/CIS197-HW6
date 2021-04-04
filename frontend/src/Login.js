import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
import './App.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const login = async () => {
    const { status } = await axios.post('/account/login', { username, password })
    if (status === 200) {
      console.log('user logged in')
      history.push('/')
    } else {
      alert('An error occured while signing up')
    }
  }
  return (
    <>
      <div className="signup">
        <p style={{ fontSize: 40 }}>
          <bold>Login In</bold>
        </p>
        <form onSubmit={e => {
          e.preventDefault()
          login()
          setUsername('')
          setPassword('')
        }}
        >
          <div className="form-group">
            <label style={{ fontSize: 20 }} htmlFor="username">Username:</label>
            <input type="text" className="form-control" id="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
          </div>
          <div className="form-group">
            <label style={{ fontSize: 20 }} htmlFor="password">Password:</label>
            <input type="text" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
          </div>
          <button style={{ marginBottom: 5 }} type="submit" className="btn btn-primary btn-lg btn-block">Log In</button>
        </form>
        Do not have an account?
        <Link to="/signup"> Sign Up!</Link>

      </div>
    </>
  )
}

export default Login
