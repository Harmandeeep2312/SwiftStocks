import React, { useState } from "react";
import "../../styles/signup.css";

const AuthBox = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake submit
    if (isLogin) {
      setMessage("You have logged in successfully ✅");
    } else {
      setMessage("Your account has been created 🎉");
    }

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Top title */}
        <div className="auth-header">
          <h1 className="auth-logo">SwiftStocks</h1>
          <p className="auth-subtitle">
            {isLogin
              ? "Welcome back! Please sign in to continue."
              : "Create an account to start your journey."}
          </p>
        </div>

        {/* Toggle buttons */}
        <div className="auth-toggle">
          <button
            className={`toggle-btn ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button
            className={`toggle-btn ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Toast / message */}
        {message && <div className="auth-message">{message}</div>}

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required={!isLogin}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button className="primary-btn" type="submit">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        {/* Footer text */}
        <p className="auth-footer-text">
          {isLogin ? "Don’t have an account? " : "Already have an account? "}
          <button
            type="button"
            className="link-btn"
            onClick={() => setIsLogin((prev) => !prev)}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>

        <p className="auth-terms">
          By continuing, you agree to our{" "}
          <a href="#" className="terms-link">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="terms-link">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AuthBox;
