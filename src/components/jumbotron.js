import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class jumbotron extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row parent mt-3">
          <div className="col-12 col-md-4 jumbo-text order-last order-md-first">
            <span>
              Wholesome home cooked meals and dessert everyday with fresh
              ingredients!
            </span>
            <div>
              <button type="button" class="btn btn-primary mt-4 ">
                <strong>Order Now</strong>
              </button>
            </div>
          </div>

          <div className="col-12  col-md-5 jumbo-image">
            <img
              src="assets/images/jumbo-image.png"
              width="521"
              height="427"
              className="img-fluid center"
              alt="cupcake pic"
            />
          </div>

          <div className="col-12 col-md-3 jumbo-design order-first order-md-last container-fluid"></div>
        </div>
      </div>
    );
  }
}

export default jumbotron;
