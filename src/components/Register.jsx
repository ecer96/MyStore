import React from "react";

function Register() {
  return (
    <div>
      <div className="register container d-flex justify-content-center mt-5">
        <form className="d-grid border border-secondary p-5 rounded">
          <div className="mb-3">
            <label for="userName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="userName"
              aria-describedby="userName"
            />
            <label for="phone" className="form-label mt-2">
                Number
            </label>
            <input
              type="tel"
              className="form-control mb-3"
              id="phone"
              aria-describedby="phone"
            />
            <label for="exampleInputEmail1" className="form-label mt-2">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text mt-2">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control mb-3"
              id="exampleInputPassword1"
            />
            <label for="exampleConfirmtPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="confirm-password"
              className="form-control"
              id="exampleConfirm    Password1"
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
              Login once registered
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;