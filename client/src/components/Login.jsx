import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../authContext";
import { useForm } from "../util/hooks";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../mutations";

export default function Login() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState([]);

  function loginUserCallback() {
    loginUser();
  }

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, { data: { loginUser: userData } }) {
      context.login(userData);
      navigate("/home");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: { loginInput: values },
  });

  return (
    <div className="form-wrapper">
      <form>
        <div className="card">
          <h1 style={{ color: "white" }}>Log in</h1>
          <input
            className="input"
            name="email"
            type="text"
            placeholder="E-mail"
            onChange={onChange}
          ></input>
          <input
            className="input"
            name="password"
            type="text"
            placeholder="Password"
            onChange={onChange}
          ></input>
          <button id="login-submit" onClick={onSubmit}>
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
