import React from "react";
import "./css/hero.css";
import SignUp from "./SignUp";
import { auth } from "./firebase";

function Hero(props) {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${props.imgSrc})`,
      }}
    >
      {auth.isSignedIn ? null : <SignUp />}
    </div>
  );
}

export default Hero;
