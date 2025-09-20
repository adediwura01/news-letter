import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import "./Success.css"

export default function Success () {
    const navigate = useNavigate();
    const location = useLocation();
  const email = location.state?.email || "your email";
  return (
    <div className="success-container">
        <div className="success-card">
            <div>
                <div>
                    <img src="\icon-list.svg" alt="check" className='icon'/>
                </div>
                <h1>
                    Thanks for Subscribing!
                </h1>
                <p>A confirmation email has been sent to <b>{email}</b>.Please open it and click the button inside to confirm your subscription.</p>
            </div>
            <div>
                <button onClick={() => navigate("/")}>
                    Dismiss message
                </button>
            </div>
        </div>
    </div>
  );
}