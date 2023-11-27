import React, { useState } from "react";
import "../page/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  const [loginemail, setLoginEmail] = useState("");

  //visibilty of password
  const [visible, setVisible] = useState(false);

  const handleInputChangePass = (event) => setPassword(event.target.value);
  const handleInputChangeEmail = (event) => setEmail(event.target.value);
  const handleLoginEmail = (event) => setLoginEmail(event.target.value);
  const handleLoginPass = (event) => setLoginPassword(event.target.value);

  return (
    <div>
      <header className="login-header">
        <div className="hamburger-icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <h4>login</h4>
      </header>

      <body>
        <div className="container">
          <div className="first-division">
            {/* Content for the first division */}

            <img src="./image/login-img.jpg" alt="login image" />
          </div>
          <div className="second-division">
            {/* Content for the second division */}
            <div className="signin-container">
              <div className="signin-heading">
                <h4>Login</h4>
              </div>

              <div className="signin-content">
                <p>if you dont have an account register</p>
                <p>
                  You can <a href="">Register here!</a>
                </p>

                <form action="">
                  <div className="input-container">
                    <label htmlFor="email"> Email :</label>

                    <FontAwesomeIcon icon={faEnvelope} />
                    <input
                      type="text"
                      id="email"
                      placeholder="Your email address"
                      value={loginemail}
                      onChange={handleLoginEmail}
                    />
                  </div>

                  <label htmlFor="password"> password :</label>
                  <div className="input-container">
                    <FontAwesomeIcon icon={faLock} />
                    <input
                      id="password"
                      placeholder="enter your password"
                      value={loginpassword}
                      type={visible ? "text" : "password"}
                      onChange={handleLoginPass}
                    />
                    <span onClick={() => setVisible(!visible)}>
                      <FontAwesomeIcon icon={visible ? faEye : faEyeSlash} />
                    </span>
                  </div>

                  <div className="remember-forgot">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                    <span className="forgot-password">Forgot password?</span>
                  </div>

                  <button className="register-button">Register</button>
                </form>

                <div className="or-divider">
                  <br />
                  <span>or continue with</span>
                  <br />
                </div>

                <div className="social-icons">
                  <span>
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faApple} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faGoogle} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="third-division">
            <div className="signin-container">
              <div className="signin-heading">
                <h4>Sign up</h4>
              </div>

              <div className="signin-content">
                <p>if you dont have an account register</p>
                <p>
                  You can <a href="">Register here!</a>
                </p>

                <form action="">
                  <div className="input-container">
                    <label htmlFor="email"> Email :</label>

                    <FontAwesomeIcon icon={faEnvelope} />
                    <input
                      type="text"
                      id="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={handleInputChangeEmail}
                    />
                  </div>

                  <label htmlFor="password"> password :</label>
                  <div className="input-container">
                    <FontAwesomeIcon icon={faLock} />
                    <input
                      id="password"
                      placeholder="enter your password"
                      value={password}
                      type={visible ? "text" : "password"}
                      onChange={handleInputChangePass}
                    />
                    <span className="eye" onClick={() => setVisible(!visible)}>
                      <FontAwesomeIcon icon={visible ? faEye : faEyeSlash} />
                    </span>
                  </div>

                  <div className="remember-forgot">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                    <span className="forgot-password">Forgot password?</span>
                  </div>

                  <button className="register-button">Register</button>
                </form>

                <div className="or-divider">
                  <br />
                  <span>or continue with</span>
                  <br />
                </div>

                <div className="social-icons">
                  <span>
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faApple} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faGoogle} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Login;
