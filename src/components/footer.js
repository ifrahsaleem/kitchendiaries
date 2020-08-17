import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/*Col 1 */}
          <div className="col-3 col-md-2">
            <div>
              <span className="footer-item">
                <Link to="/">Home</Link>
              </span>
              <span className="footer-item">
                <Link to="/about">About</Link>
              </span>
              <span className="footer-item">
                <Link to="/contact">Contact</Link>
              </span>
            </div>
          </div>

          {/*Col 2 Empty */}
          <div className="col-3 col-md-4"></div>

          {/* Col 3 Empty */}
          <div className="col-3 col-md-4"></div>

          {/*Col 4*/}
          <div className="col-12 col-md-2">
            <span>
              <Link to="/">
                <FaFacebookF className="icon" />
              </Link>
            </span>
            <span>
              <Link to="/">
                <AiOutlineInstagram className="icon" />
              </Link>
            </span>
            <div className="row web-design ">
              *Website Developed and Designed by
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom  row justify-content-center col-auto">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Kitchen Diaries - All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
