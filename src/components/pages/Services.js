import React from 'react';
import Footer from '../layout/Footer';
import img from '../../images/jeanLeg.jpg';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <header className="container1">
        <div className="img"></div>
        <div className="overlay"></div>
        <div className="text text-center">
          <p>Services</p>
        </div>
      </header>

      <section id="service" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-center">Services</h1>
              <div className="service">
                <h4 className="service-title">Residential</h4>
                <p className="service-text"></p>
                <button className="service-toggle">
                  <i className="fas fa-chevron-down"></i>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="service">
                <h4 className="service-title">Commercial</h4>
                <p className="service-text"></p>
                <button className="service-toggle">
                  <i className="fas fa-chevron-down"></i>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="service">
                <h4 className="service-title">Custom</h4>
                <p className="service-text"></p>
                <button className="service-toggle">
                  <i className="fas fa-chevron-down"></i>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Link to="/signup" className="btn btn-primary my-2">
                  Start Service Today!
                </Link>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center justify-content-center mt-3">
              <img
                src={img}
                className="img-fluid"
                alt="Jean Leg with Washing Machine"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const btn = document.querySelectorAll('.service-toggle');

btn.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});

export default Services;
