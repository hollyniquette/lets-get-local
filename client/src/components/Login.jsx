import React, { useState } from 'react';
import  {  useNavigate } from 'react-router-dom'
import  './login.css'
export default function index() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (event) => {
      console.log("yo man")
      event.preventDefault();
     const response = await login(email, password);
     authLogin(response.data);
     setUser(response.data);
      navigate('/test');
    }
  return (
    <div className='form-wrapper'>
    <form onSubmit={handleSubmit}>
      <div className="card">
        <h1>Log in</h1>
        <input className="input" type="text" placeholder='email' onChange={(e) => {setEmail(e.target.value)}}></input>
        <input className="input" type="text" placeholder='password' onChange={(e) => {setPassword(e.target.value)}}></input>
        <button id="login-submit">submit</button>
      </div>
    </form>
  </div>
  )
}