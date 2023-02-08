import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import "./auth.css";

export default function Signup() {

  return (
    <main className="form-main">
      <div className="form-image"></div>
      <div className="form-container">
        <span className="form-container-items" id="google-signup">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google logo"
          />
          Sign up with Google
        </span>

        <span class="form-container-items" id="facebook-signup">
          <img
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            alt="Facebook logo"
          />
          Sign up with Facebook
        </span>

        <span class="form-container-items" id="apple-signup">
          <img src="https://www.apple.com/favicon.ico" alt="Apple logo" />
          Sign up with Apple
        </span>

        <Link className="form-container-items" id="started-email" to="/signup/email">
          Get started with Email
        </Link>
      </div>
    </main>
  );
}
