import "./auth.css";
import vegetables from "../images/vegetables1.jpg";

export default function SignupEmail() {
  return (
    <main className="form-main">
      <div className="form-image">
        <img src={vegetables} alt="vegetables" />
      </div>
      <div className="form-container">
        <h3>Signup with Email</h3>
        <input
          type="text"
          placeholder="Enter your E-mail"
          className="email-inputs"
        />
        <input
          type="text"
          placeholder="Enter your Password"
          className="email-inputs"
        />
        <input
          type="text"
          placeholder="Confirm your password"
          className="email-inputs"
        />
        <button type="submit" className="email-input-submit">
          Join Okoa
        </button>
      </div>
    </main>
  );
}
