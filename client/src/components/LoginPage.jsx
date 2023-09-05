import { Link } from "react-router-dom";

export default function ProfilePage() {
  return (
    <>
      <div class="container">
      <h1>Welcome To Lets Get Local</h1>
      <Link to="login">
        <button>Login</button>
      </Link>
      <Link to="signup">
        <button>Sign Up</button>
      </Link>
      </div>
    </>
  );
}
