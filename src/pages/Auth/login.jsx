import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../index.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // We'll connect Laravel authentication here later.
    console.log("Login form submitted");
  };

  return (
    <div className="login-page">
      <div className="container-fluid">
        <div className="row min-vh-100">
          {/* Left side - Farm image */}
          <div className="col-lg-6 login-image-section">
            <div className="image-overlay">
              <div className="farm-brand">
                <i className="bi bi-flower1"></i>
                <span>LINAH FARMS</span>
              </div>

              <div className="farm-message">
                <h1>
                  Growing Better.
                  <br />
                  Managing Smarter.
                </h1>
                <p>
                  Manage your farm operations, monitor production and keep
                  everything running smoothly.
                </p>
              </div>

              <div className="image-footer">
                <i className="bi bi-leaf"></i>
                Smart Farming Management
              </div>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="col-lg-6 login-form-section">
            <div className="login-content">
              <div className="mobile-brand">
                <i className="bi bi-flower1"></i>
                <span>LINAH FARMS</span>
              </div>

              <div className="welcome-text">
                <span className="welcome-label">WELCOME BACK</span>
                <h2>Login to your account</h2>
                <p>Enter your credentials to access your farm dashboard.</p>
              </div>

              <form onSubmit={handleLogin}>
                {/* Email */}
                <div className="mb-4">
                  <label className="form-label">Email Address</label>
                  <div className="input-group custom-input">
                    <span className="input-group-text">
                      <i className="bi bi-envelope"></i>
                    </span>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label className="form-label">Password</label>
                    <a href="/forgot-password" className="forgot-link">
                      Forgot password?
                    </a>
                  </div>

                  <div className="input-group custom-input">
                    <span className="input-group-text">
                      <i className="bi bi-lock"></i>
                    </span>

                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Enter your password"
                      required
                    />

                    <button
                      type="button"
                      className="input-group-text password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i
                        className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                      ></i>
                    </button>
                  </div>
                </div>

                {/* Remember me */}
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>

                {/* Login button */}
                <button type="submit" className="btn btn-success w-100">
                  Login to Dashboard
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </form>

              <div className="login-bottom">
                <p>
                  <i className="bi bi-shield-check me-2"></i>
                  Secure Farm Management Portal
                </p>
                <span>© 2026 Linah Farm Management System</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
