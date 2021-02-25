import React from "react";
import "./css/hero.css";

function SignUp() {
  return (
    <div className="signup">
      <p>New here? Create a free account!</p>
      <input type="text" name="name" placeholder="Name"></input>
      <input type="text" name="email" placeholder="Email Address"></input>
      <input type="password" name="password" placeholder="Password"></input>
      <div className="button-fine-print">
        <button>Sign Up</button>
        <p className="fine-print">
          By clicking “Sign up” I agree to the Goodreads Terms of Service and
          confirm that I am at least 13 years old.
        </p>
      </div>
    </div>
  );
}

export default SignUp;
