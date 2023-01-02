import React from "react";
import { json, Link } from "react-router-dom";
import { useState } from "react";
import "./auth.css";

export default function Signup() {
  let [role, setRole] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [password_c, setPasswordC] = useState("");

  function handleSelect(event) {
    setRole(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let user = {
      role_id: role,
      email,
      password,
      password_confirmation: password_c,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    console.log(role, email, password, password_c);
  }

  return (
    <main className="form-main">
      <div className="form-image"></div>
      <form className="form" onSubmit={handleSubmit}>
        <span>Join Okoa</span>

        <section id="form-section2">
          <div id="device-auth">
            <span>Facebook</span>
            <span>Google</span>
          </div>

          <span id="roles-divs">
            {/* <span id="role-desc">How would you like to use Okoa?</span> */}
            <select id="roles" onChange={handleSelect}>
              <option>Select how you would like to use Okoa.</option>
              <option value="2">Dispose waste and earn from it.</option>
              <option value="3">Buy compost and sell your produce.</option>
              <option value="4">Partner with us</option>
            </select>
          </span>

          <div id="signup-email">
            <input
              type="text"
              placeholder="E-Mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div id="signup-names">
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Confirm Password"
              value={password_c}
              onChange={(e) => setPasswordC(e.target.value)}
            />
          </div>

          <div id="signup-button">
            <button type="submit">Join Okoa</button>
          </div>

          <div id="signup-links">
            <Link to="">Back</Link>
            <Link to="">Login</Link>
          </div>
        </section>
      </form>
    </main>
  );
}
