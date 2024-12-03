import React from "react";
import "./LandingPage.css"; // Include this file for styling
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log("Login button clicked");
    navigate("/login");
  };
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">
          <span>💬</span> ChatSia
        </div>
      </header>

      <main className="main-content">
        <h1 className="text-4xl font-bold">
          Connect, Chat, and Call with Ease
        </h1>
        <p className="text-lg font-semibold mt-3">
          Experience seamless communication with ChatSia - your all-in-one
          platform for
          <br />
          messaging.
        </p>
        <button onClick={handleLogin} className="google-signin mt-4">
          <span>🔗</span> Login
        </button>

        <div className="features mt-4">
          <span>💬 Instant Messaging</span>
        </div>
      </main>

      <footer className="footer  ">
        <div className="footer-content ">
          <p>© 2024 ChatSia. All rights reserved.</p>
          <div className="links ">
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
