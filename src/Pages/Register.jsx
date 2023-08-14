import React from "react";
import Add from "../img/img.svg";
export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">MChat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            placeholder="user avaar"
          />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}
