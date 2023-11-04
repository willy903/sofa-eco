import React from "react";
import "./../pages/css/loginsignup.css";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginSignup = () => {
  return (
    <div className="logSign">
      <div className="loginCont">
        <div className="contDes">
          <h1>Welcome back :)</h1>
          <p>
            To keep connected with us please login with your personal
            information by email and password.
          </p>
        </div>
        <div className="inputDes">
          <div className="singInput">
            <div className="iconInput">
              <span>
                <BsPerson size={25} />
              </span>
            </div>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="singInput">
            <div className="iconInput">
              <span>
                <HiOutlineMail size={25} />
              </span>
            </div>
            <input type="text" placeholder="Email Address" />
          </div>
          <div className="singInput">
            <div className="iconInput">
              <span>
                <RiLockPasswordLine size={25} />
              </span>
            </div>
            <input type="text" placeholder="Password" />
          </div>
          <div className="singInput">
            <input type="checkbox" id="cgu" />
            <label htmlFor="cgu">
              I agree to <span>the terms of conditions</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Sign Up" />
        </div>
        <div className="otherAcc">
          <p>Already have an account? <span>Login here</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
