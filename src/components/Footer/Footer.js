import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer py-5 bg-dark">
        <div className="container">
          <div className="footer-content text-white grid">
            <div className="footer-item text-center">
              <h6 className="fs-17 fw-6">Contact</h6>
              <ul>
                <li>
                  <span>
                    <i className="fas fa-phone"></i>
                  </span>
                  <span className="fs-15">+678 004 5754</span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="fs-15">info@shophub.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div style={{ background: "#222"  , padding: '20px' ,color: "#fff" , textAlign:"center" }} className="footer-bull">
        © 2023 Loyiha boshqaruvchisi Shohruhbek Ubaydullayev
      </div>
    </>
  );
};

export default Footer;
