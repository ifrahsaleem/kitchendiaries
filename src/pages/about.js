import React from "react";
import Footer from "../components/footer";
// import Aboutimg from "./public/assets/images/Optimized-aboutus.jpeg";

export default function About() {
  return (
    <div className="container about-container">
      <div className="row">
        <div className="head order-first ">
          <h2 className="text-center"> Who We Are </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 justify-content-center text-center">
          <img
            className="aboutimg img-fluid"
            src="assets/images/Optimized-aboutus.jpeg"
            alt="About us image"
            width=""
            height=""
          />
        </div>

        <div className="about justify-content-center text-justify col col-md-8 mb-4">
          <h2 classname="head-2"> Who We Are </h2>
          <p>
            Kitchen Diaries is a locally established business found in May 2020
            by two sisters who happened to find themselves baking and
            experimenting around with desserts all the time in the kitchen. They
            mutually decided to create a instagram page and gradually started
            taking orders on demand.
          </p>

          <p>
            The business is persistently developing as we continuously try out
            different baked goods to cater to our customers.
          </p>

          <p>
            Currently, we offer a variety of desserts; cakes, cupcakes, cookies,
            cheesecakes, brownies and our signature Oreo truffles (where it all
            started). Our desserts are known to be fresh and delightfully rich.
          </p>

          <p>
            In addition to baking mouth watering treats, we provide conveyance
            in Oakville and the GTA. Kitchen Diaries is here to satisfy all your
            dessert cravings and give you a decadent experience
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
}
