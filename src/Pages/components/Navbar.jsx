import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">MChat</span>
      <div className="user">
        <img src="" alt="" />
        <span>John</span>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
