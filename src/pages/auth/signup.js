import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
import "./auth.css";

export default function Signup() {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   let user = {
  //     role_id: role,
  //     email,
  //     password,
  //     password_confirmation: password_c,
  //   };

  //   fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }

  return (
    <main className="form-main">
      <div className="form-image">
        {/* <img src={VagetablaImage} alt="Vegetable" /> */}
      </div>
      <div className="form-container">
        <span className="form-container-items" id="google-signup">
          Continue with Google
        </span>
        <span className="form-container-items" id="facebook-signup">
          Continue with Facebook
        </span>
        <span className="form-container-items" id="email-signup">
          Continue with Email
        </span>
        <span className="form-container-items"></span>
      </div>
    </main>
  );
}
