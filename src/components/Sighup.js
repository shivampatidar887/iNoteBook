import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Signup.css";
const Sighup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history("/AddNote");
      props.showAlert("Account Created Successfully", "success");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div >
      {" "}
      <div className="background">
      <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="lsform" onSubmit={handleSubmit}>
        <h3>Sigh-Up</h3>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control Sighup-input"
            id="name"
            name="name"
            placeholder="Enter Here"
            onChange={onChange}
            minLength={5}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control Sighup-input"
            id="email"
            name="email"
            placeholder="Enter Here"
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
            className="form-control Sighup-input"
            id="password"
            name="password"
            placeholder="Enter Here"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confrim Password
          </label>
          <input
            type="password"
            className="form-control Sighup-input"
            id="cpassword"
            name="cpassword"
            placeholder="Enter Here"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sighup;
