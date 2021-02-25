import React from "react";
import "./css/header.css";
import { auth } from "./firebase";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //some fancy firebase login shit
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    //some fancy firebase register shit
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully created new user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="header">
      <div className="header-content">
        <img src="https://s.gr-assets.com/assets/home/header_logo-8d96d7078a3d63f9f31d92282fd67cf4.png" />
        <div className="login">
          <input type="text" name="username" placeholder="Username"></input>
          <input type="password" name="password" placeholder="Password"></input>
          <button>Sign In</button>
          <button>Demo Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
