import { useState } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import LoginForm from "../LoginForm/LoginForm";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className="AuthPage">
      <div className="AuthHeader">
        <p>{showSignUp ? "Already signed up?" : "New here?"}</p>
        <p className="AuthLink" onClick={() => setShowSignUp(!showSignUp)}>
          {showSignUp ? "Log In" : "Sign Up"}
        </p>
      </div>
      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </div>
  );
}
