import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../authContext";
import { useForm } from "../util/hooks";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../mutations";

export default function Signup() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState([]);

  function registerUserCallback() {
    registerUser();
  }

  const { onChange, onSubmit, values } = useForm(registerUserCallback, {
    username: "",
    email: "",
    password: "",
  });

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, { data: { registerUser: userData } }) {
      context.login(userData);
      navigate("/home");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: { registerInput: values },
  });

  return (
    <div className="form-wrapper">
      <form>
        <div className="card">
          <h1>Sign Up</h1>
          <input
            className="input"
            name="username"
            type="text"
            placeholder="Username"
            onChange={onChange}
          />
          <input
            className="input"
            name="email"
            type="text"
            placeholder="E-mail"
            onChange={onChange}
          ></input>
          <input
            className="input"
            type="text"
            name="password"
            placeholder="Password"
            onChange={onChange}
          ></input>
          <button id="signup-submit" onClick={onSubmit}>
            submit
          </button>
        </div>
      </form>
      <div>
        <Link to="..">
          <button>Back</button>
        </Link>
      </div>
      {errors?.map((error) => (
        <p key={error.message}>{error.message}</p>
      ))}
    </div>
  );
}
