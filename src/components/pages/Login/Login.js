import React, { useState } from "react";
import fire from "../../Items/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/action";
import "./Login.scss";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");

  const handleLogin = () => {
    clearErr();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => dispatch(addUser({ email })))
      .then(() => history.push("/"))
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disable":
          case "auth/user-not-found":
            setEmailErr(err.message);
            break;
          case "auth/wrong-password":
            setPassErr(err.message);
            break;
        }
      });
  };

  const clearErr = () => {
    setEmailErr("");
    setPassErr("");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login page</h2>
        <div className="input-login">
          <label>Email</label>
          <input
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="login-err">{emailErr}</p>
        </div>
        <div className="input-login">
          <label>Password</label>
          <input
            className="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="login-err">{passErr}</p>
        </div>
        <button onClick={handleLogin} className="submit-login">
          Log in
        </button>
        <p>
          If don't have account
          <Link to="/signup" className="other-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
