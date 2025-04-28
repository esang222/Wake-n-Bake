import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="signup-container d-flex justify-content-center align-items-center vh-100">
      <form className="signup-form shadow p-4 rounded">
        <h2 className="text-center mb-2">
          <span className="brand1">Wake </span><span className="brand-black">‘n </span><span className="brand">Bake</span>
        </h2>
        <p className="text-center mb-4">Register to enjoy the sweet treats of Wake ‘n Bake.</p>

        <div className="row">
          <div className="col-md-6 mb-3">
            <input type="text" className="form-control" placeholder="First Name" />
          </div>
          <div className="col-md-6 mb-3">
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
          <div className="col-md-6 mb-3">
            <input type="date" className="form-control" placeholder="Birthday" />
          </div>
          <div className="col-md-6 mb-3">
            <input type="text" className="form-control" placeholder="Gender" />
          </div>
          <div className="col-md-12 mb-3">
            <input type="text" className="form-control" placeholder="Address" />
          </div>
          <div className="col-md-6 mb-3">
            <input type="text" className="form-control" placeholder="Contact Number" />
          </div>
          <div className="col-md-6 mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="col-md-6 mb-3">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="col-md-6 mb-3">
            <input type="password" className="form-control" placeholder="Confirm Password" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-3">Sign Up</button>

        <p className="text-center">Already have an account? <Link to="/" className="login-link">Login</Link></p>
      </form>
    </div>
  );
}

export default SignUp;
