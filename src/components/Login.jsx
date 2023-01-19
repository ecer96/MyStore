import React from "react";

function Login() {
  return (
    <div className="container-fluid d-flex justify-content-center mt-5">
      <form className="login-form d-grid border border-secondary p-5 rounded">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control mt-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="indian@gmail.com"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control mt-3"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked
          />
          <label className="form-check-label" for="exampleCheck1">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;