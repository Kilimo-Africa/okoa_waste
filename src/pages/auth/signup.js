import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
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
      <div className="form-image"></div>
      <div className="form-container"></div>
    </main>
  );
}
