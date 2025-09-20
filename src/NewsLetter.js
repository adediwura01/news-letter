import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./NewsLetter.css"; 

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return; 
    navigate("/success");
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-card">
        
        <div className="left">
          <h1 className="title">Stay updated!</h1>
          <p className="subtitle">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <ul className="features">
            <li> <img src="\icon-list.svg" alt="check"/> Product discovery and building what matters</li>
            <li> <img src="\icon-list.svg" alt="check"/> Measuring to ensure updates are a success</li>
            <li><img src="\icon-list.svg" alt="check"/> And much more!</li>
          </ul>

          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
            <button type="submit" className="button">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>

        <div className="right">
          <div className="illustration"> <img src="/illustration-sign-up-desktop.svg" alt="illustration" /></div>
        </div>
      </div>
    </div>
  );
}
