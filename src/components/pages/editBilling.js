import React from 'react';
import Footer from '../layout/Footer';
import { Link } from 'react-router-dom';

const editBilling = () => {
  return (
    <>
      <div className="containerED border p-5 my-5">
        <div className="fs-3 mb-5">
          <i className="fas fa-user-alt"></i> Billing Details
        </div>
        <div className="col-md-12">
          <label htmlFor="firstName" className="form-label customS">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            className="form-control radius"
            required
          ></input>
        </div>
        <div className="col-md-12 pt-4">
          <label htmlFor="lastName" className="form-label customS">
            Last Name
          </label>
          <input
            type="text"
            name="lastNameName"
            className="form-control radius"
            required
          ></input>
        </div>
        <div className="col-md-12 pt-4">
          <label htmlFor="address" className="form-label customS">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="form-control radius"
            required
          ></input>
        </div>
        <div className="col-md-12 pt-4">
          <label htmlFor="aptSuite" className="form-label customS">
            Apt, Suite, etc.
          </label>
          <input
            type="text"
            name="aptSuite"
            className="form-control radius"
          ></input>
        </div>
        <div className="col-md-12 pt-4">
          <label htmlFor="city" className="form-label customS">
            City
          </label>
          <input
            type="text"
            name="city"
            className="form-control radius"
            required
          ></input>
        </div>
        <div className="col-md-12 pt-4">
          <label htmlFor="state" className="form-label customS">
            State
          </label>
          <select type="text" name="state" className="form-control radius">
            <option value="" selected="selected">
              --Select a State--
            </option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div className="col-md-12 pt-4">
          <label htmlFor="zipCode" className="form-label customS">
            Zip Code
          </label>
          <input
            type="text"
            name="zipCode"
            className="form-control radius"
            required
          ></input>
        </div>
        <h5 className="pt-4">Credit Card Information</h5>
        <div className="col-md-12 pt-4">
          <label htmlFor="cardNumber" className="form-label customS">
            Card Number
          </label>
          <input
            type="text"
            name="pickUp"
            className="form-control radius"
            required
          ></input>
        </div>
        <div className="col-md-12 pt-4">
          <label htmlFor="cvv" className="form-label customS">
            CVV
          </label>
          <input
            type="text"
            name="pickUp"
            className="form-control radius"
            required
          ></input>
        </div>
        <div className="col-md-12 pt-4">
          <label htmlFor="cvv" className="form-label customS">
            Expiration Month
          </label>
          <select type="text" name="state" className="form-control radius">
            <option value="">--Select Month--</option>
            <option value="1">Janaury</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="col-md-12 pt-4">
          <label htmlFor="cvv" className="form-label customS">
            Expiration Year
          </label>
          <select type="text" name="state" className="form-control radius">
            <option value="">--Select Year--</option>
            <option value="1">2021</option>
            <option value="2">2022</option>
            <option value="3">2023</option>
            <option value="4">2024</option>
            <option value="5">2025</option>
            <option value="6">2026</option>
            <option value="7">2027</option>
            <option value="8">2028</option>
            <option value="8">2029</option>
            <option value="8">2030</option>
          </select>
        </div>
        <br></br>
        <br></br>
        <div className="col-4 d-grid">
          <Link to="/billing">
            <button type="submit" className="btn btnCustom btn-outline-primary">
              Update
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default editBilling;
