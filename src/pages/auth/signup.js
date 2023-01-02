import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
export default function Signup() {
  function displayHome() {
    let section1 = document.querySelector("#form-section1");
    let section2 = document.querySelector("#form-section2");

    console.log(section1, section2);
  }

  return (
    <main className="form-main">
      <div className="form-image"></div>
      <form className="form">
        <span>Join Okoa</span>
        <section id="form-section1">
          <div id="form-section1-container">
            <label>
              Disposer
              <input type="radio" className="radio" />
            </label>

            <label>
              Farmer
              <input type="radio" className="radio" />
            </label>

            <label>
              Partner
              <input type="radio" className="radio" />
            </label>
          </div>
          <div id="form-section1-links">
            <Link className="links" onClick={displayHome}>
              Next
            </Link>
          </div>
        </section>

        <section id="form-section2">
          <div id="device-auth">
            <span>Facebook</span>
            <span>Google</span>
          </div>

          <div id="signup-email">
            <input type="text" placeholder="E-Mail address" />
          </div>

          <div id="signup-names">
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />
          </div>

          <div id="signup-links">
            <Link to="">Back</Link>
            <Link to="">Login</Link>
          </div>
          <div id="signup-button">
            <button type="submit">Join Okoa</button>
          </div>
        </section>
      </form>
    </main>
  );
}
