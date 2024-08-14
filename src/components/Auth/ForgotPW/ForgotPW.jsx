import "./ForgotPW.css";
import { useState } from "react";

export default function ForgotPW() {
  let [email, setEmail] = useState("");

  function handleChange(evt) {
    setEmail(evt.target.value);
  }
  return (
    <div className="ForgotPW">
      <h2>Password Reset</h2>
      <p>Please enter your email address</p>
      <input
        className="ResetInput"
        placeholder="Email address"
        minLength="5"
        maxLength="20"
        type="text"
        onChange={handleChange}
        required
      />
      <button className="ForgotBtn">Send Code</button>
      <p>Please enter the code that was emailed</p>
      <input
        className="ResetInput2"
        placeholder="4 Digit Code"
        minLength="4"
        maxLength="4"
        type="text"
        required
      />
      <input
        className="ResetInput"
        minLength="6"
        maxLength="20"
        placeholder="Create a password"
        type="password"
        name="password"
        required
      />
      <label className="Test">Password must be 6 characters long</label>
      <input
        className="ResetInput"
        minLength="6"
        maxLength="20"
        placeholder="Confirm your password"
        type="password"
        name="confirm"
        required
      />
      <label className="Test">Retype Password</label>
      <button className="ResetBtn">Reset Password</button>
    </div>
  );
}
