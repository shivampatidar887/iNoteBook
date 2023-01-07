import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Signup.css";
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Logged in  Successfully", "success");
      history("/AddNote");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login_k" >
      {" "}
      <div className="background">
      <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="lsform" id="login_l" onSubmit={handleSubmit}>
      <h3>Log-In</h3>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control login-input"
            id="email"
            name="email"
            placeholder="Enter Here"
            value={credentials.email}
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control login-input"
            id="password"
            name="password"
            placeholder="Enter Here"
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
