import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="container ">
        <div className="row">
          {/*Col 1 */}
          <div className="col-12 col-md-2  text-center">
            <div className="mt-3 text-center">
              {/* <div className="col-2 footer-item">
              <Link to="/home">Home</Link>
            </div>
            <div className="col-2 footer-item">
              <Link to="/about">About</Link>
            </div>
            <div className="col-2 footer-item">
              <Link to="/Contactus">Contact</Link>
            </div> */}

              <span className="footer-item ">
                <Link to="/home">Home</Link>
              </span>
              <span className="footer-item ">
                <Link to="/about">About</Link>
              </span>
              <span className="footer-item ">
                <Link to="/Contactus">Contact</Link>
              </span>
            </div>
          </div>

          {/*Col 2 Empty */}
          <div className="col-3 col-md-4"></div>

          {/* Col 3 Empty */}
          <div className="col-3 col-md-4"></div>

          {/*Col 4*/}
          <div className="col-12 col-md-2 mt-3 justify-content-center text-center">
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
            <div className="row web-design justify-content-center text-center">
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
