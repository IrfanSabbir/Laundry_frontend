import React from 'react';
import Footer from '../layout/Footer';
import { Link } from 'react-router-dom';

const Billing = () => {
  return (
    <>
      <div className="containerD border p-5 my-5">
        <div className="fs-3 mb-5">
          <i className="fas fa-user-alt"></i> Billing
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">First Name:</div>
            <div className="col-sm-4"></div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Last Name:</div>
            <div className="col-sm-4"></div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Address:</div>
            <div className="col-sm-4"></div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">State:</div>
            <div className="col-sm-4"></div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Zip Code:</div>
            <div className="col-sm-4"></div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Last Four Digits:</div>
            <div className="col-sm-4"></div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Expiration Month:</div>
            <div className="col-sm-4"></div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Expiration Year:</div>
            <div className="col-sm-4"></div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="col-4 d-grid">
          <Link to="/editbilling">
            <button type="submit" className="btn btnCustom btn-outline-primary">
              Edit
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Billing;
