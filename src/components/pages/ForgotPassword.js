import React from 'react';
import Footer from '../layout/Footer';

const ForgotPassword = () => {
  return (
    <>
      <div className="containerF border p-5">
        <div className="fs-3 text-center">Reset Password</div>
        <div className="col-md-4 pt-4 text-center mx-auto">
          <label htmlFor="aptSuite" className="form-label">
            Enter Email
          </label>
          <input
            type="text"
            name="aptSuite"
            className="form-control radius"
          ></input>
        </div>
        <div className="col-md-4 d-grid mx-auto mt-4">
          <button
            type="submit"
            value="Register"
            className="btn btn-outline-primary radius"
          >
            Reset Password
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
