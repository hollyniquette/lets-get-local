import { Link } from 'react-router-dom';

export default function Signup() {
   
    return (
      <div className='form-wrapper'>
      <form>
        <div className="card">
          <h1>Sign Up</h1>
          <input className="input" type="text" placeholder="Name"/>
          <input className="input" type="text" placeholder='E-mail'></input>
          <input className="input" type="text" placeholder='Password'></input>
          <button id="login-submit">submit</button>
        </div>
      </form>
      <div>
        <Link to="..">
                <button>Back</button>
        </Link>
      </div>
    </div>
    )
  }