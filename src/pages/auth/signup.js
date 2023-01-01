import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
export default function Signup() {
  return (
    <main className="form-main">
      <div className="form-image"></div>
      <form className="form">
        <span>Join Okoa</span>
        <section id="form-section1">
          <div id="form-section1-container">
            <label>
              Disposer
              <input type="radio" />
            </label>

            <label>
              Farmer
              <input type="radio" />
            </label>

            <label>
              Partner
              <input type="radio" />
            </label>
          </div>
          <div id="form-section1-links">
            <Link className="links">Next</Link>
          </div>
        </section>

        <section id="form-section2"></section>
      </form>
    </main>
  );
}
