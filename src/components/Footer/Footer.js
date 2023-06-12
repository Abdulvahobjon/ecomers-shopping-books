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
                  <a target="_blank" href="tell: +998975911441" className="fs-15"> +998975911441</a>
                </li>
                <li>
                  <span>
                    <i className="fas fa-envelope"></i>
                  </span>
                  <a target="_blank" href="https://t.me/Zamzam_books" className="fs-15"> @Zamzam_books</a>
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
