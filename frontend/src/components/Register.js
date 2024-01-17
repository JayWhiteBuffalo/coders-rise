import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import authHeader from "../services/auth-header";
import Navbar from "./Navbar";
import ProfilePractice from "./ProfilePractice";

import AuthService from "../services/auth.service";


const required = (value) => {
    // Create an instance of Axios with the authorization header
    
    
  if (!value) {
    return (
      <div className="mt-3 p-2 alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeName = (e) =>
  {
    const name = e.target.value;
  }
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    const axiosWithAuth = axios.create({
      headers: authHeader(),
    });

    if (checkBtn.current.context._errors.length === 0) {
      try {
        const response = await axiosWithAuth.post("http://localhost:8080/api/auth/signup", {
          email,
          username,
          password,
        });
  
        // Handle success
        setMessage(response.data.message);
        setSuccessful(true);
        navigate("/profile");
      } catch (error) {
        // Handle errors
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        setMessage(resMessage);
        setSuccessful(false);
      }
    }
  };


  return (
    <div className="col-md-12">
      <div className="card login-logout-card card-container">
        <Navbar />
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          id="myImage"
          alt="profile-img"
          className="profile-img-card"
        />
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="mb-3">
                <label htmlFor="firstName">First Name:</label>
                <Input
                  type="text"
                  className="form-control"
                  name="firstName"
                  onChange={onChangeName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName">Last Name:</label>
                <Input
                  type="text"
                  className="form-control"
                  name="lastName"
                  onChange={onChangeName}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="username">Username</label>
                <Input
                   type="text"
                   className="form-control"
                   name="username"
                   value={username}
                   onChange={onChangeUsername}
                   validations={[required, vusername]}
                />
                </div>
              <div className="mb-3">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required, vpassword]}
              />
                            <div className="mb-3">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>
              </div>
              <button className="mt-3 btn btn-primary btn-block">
                Sign Up
              </button>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
                
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;