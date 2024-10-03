import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="Username"  className="form-control mb-2"/>
      <input placeholder="Password"  className="form-control mb-2" type="password" />
      {/* <input placeholder="Verify password" className="form-control mb-2" type="password" /> */}
      <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100"> Sign up </Link><br />
      <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
);}
