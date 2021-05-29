import React, { useState } from "react";
import fire from "../../Items/firebase";
import { useDispatch } from "react-redux";
import "./Signup.scss";
import { Link, useHistory } from "react-router-dom";
import { addUser } from "../../redux/action";

function Signup() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");

  const handleSignup = () => {
    clearErr();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => dispatch(addUser({ email })))
      .then(() => history.push("/home"))
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailErr(err.message);
            break;
          case "auth/weak-password":
            setPassErr(err.message);
            break;
        }
      });
  };

  const clearErr = () => {
    setEmailErr("");
    setPassErr("");
  };

  console.log(email);
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Signup page</h2>
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
        <button onClick={handleSignup} className="submit-signup" >Sign up</button>
        <p>
          If you have account
          <Link to="/login" className="other-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
