import { Link } from 'react-router-dom';

export default function Signup() {
   
    return (
      <div className='form-wrapper'>
      <form>
      <h1>Sign Up</h1>
        <div className="card">
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
