import React, {useState} from 'react';

function AuthBox() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSignUp) {
      console.log('Sign Up - Email:', email);
      console.log('Sign Up - Password:', password);
    } else {
      console.log('Login - Email:', email);
      console.log('Login - Password:', password);
    }
    
  };

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

export default AuthBox;

  