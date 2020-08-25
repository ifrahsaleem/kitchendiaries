import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Motion, spring } from "react-motion";

export default class Categories extends Component {
  constructor() {
    super();
    this.state = {
      isHover: false,
    };
    this.handleHover = this.handleHover.bind(this);
    this.getSpringProps = this.getSpringProps.bind(this);
  }
  handleHover(active) {
    this.setState({ isHover: active });
  }
  getSpringProps() {
    return {
      defaultStyle: {
        scale: 1,
        marginTop: 25,
        imageOpacity: 0.7,
        opacity: 1,
      },
      style: {
        scale: spring(this.state.isHover ? 0.9 : 1),
        marginTop: spring(this.state.isHover ? 22 : 25),
        imageOpacity: spring(this.state.isHover ? 0.4 : 0.7),
        opacity: spring(this.state.isHover ? 0.5 : 1),
      },
    };
  }
  render() {
    return (
      <div className="categories container">
        <Motion {...this.getSpringProps()}>
          {(tweenCollection) => {
            let styleImage = {
              transform: "scale(" + tweenCollection.scale + ")",
              opacity: tweenCollection.opacity,
            };

            return (
              <div>
                <h2 className="text-md-left text-sm-center text-center">
                  What are you looking for?
                </h2>

                <div className="row">
                  <div
                    className="col-12 col-md-4 justify-content-center text-center imgContainer "
                    onMouseOver={this.handleHover.bind(null, true)}
                    onMouseOut={this.handleHover.bind(null, false)}
                  >
                    <img
                      className="img "
                      src="assets/images/aboutus.jpeg"
                      alt="Cake"
                      height="350px"
                      width="350px"
                      style={styleImage}
                    />
                    <div className="carousel-caption  d-flex h-100 align-items-center justify-content-center">
                      Cakes
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-4 justify-content-center text-center "
                    onMouseOver={this.handleHover.bind(null, true)}
                    onMouseOut={this.handleHover.bind(null, false)}
                  >
                    <img
                      className="img "
                      src="assets/images/cakesickle.jpeg"
                      alt="Cakesickle"
                      height="350px"
                      width="350px"
                      style={styleImage}
                    />
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                      Cakesickles
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-4 justify-content-center text-center"
                    onMouseOver={this.handleHover.bind(null, true)}
                    onMouseOut={this.handleHover.bind(null, false)}
                  >
                    <img
                      className="img "
                      src="assets/images/tart.jpeg"
                      alt="Tarts"
                      height="350px"
                      width="350px"
                      style={styleImage}
                    />
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                      Tarts
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div
                    className="col-12 col-md-4 justify-content-center text-center"
                    onMouseOver={this.handleHover.bind(null, true)}
                    onMouseOut={this.handleHover.bind(null, false)}
                  >
                    <img
                      className="img"
                      src="assets/images/cheesecake.jpeg"
                      alt="Cheesecake"
                      height="350px"
                      width="350px"
                      style={styleImage}
                    />
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                      Cheesecakes
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-4 justify-content-center text-center"
                    onMouseOver={this.handleHover.bind(null, true)}
                    onMouseOut={this.handleHover.bind(null, false)}
                  >
                    <img
                      className="img"
                      src="assets/images/brownie.jpeg"
                      alt="Brownies"
                      height="350px"
                      width="350px"
                      style={styleImage}
                    />
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                      Brownies
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-4 justify-content-center text-center"
                    onMouseOver={this.handleHover.bind(null, true)}
                    onMouseOut={this.handleHover.bind(null, false)}
                  >
                    <img
                      className="img"
                      src="assets/images/cookie.jpeg"
                      alt="Cookies"
                      height="350x"
                      width="350px"
                      style={styleImage}
                    />
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                      Cookies
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div
                    className="col-12 col-md-4 justify-content-center text-center"
                    onMouseOver={this.handleHover.bind(null, true)}
                    onMouseOut={this.handleHover.bind(null, false)}
                  >
                    <img
                      className="img"
                      src="assets/images/cupcake-main.jpeg"
                      alt="Cupcake"
                      height="350px"
                      width="350px"
                      style={styleImage}
                    />
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                      Cupcakes
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-4 justify-content-center text-center"
                    onMouseOver={this.handleHover.bind(null, true)}
                    onMouseOut={this.handleHover.bind(null, false)}
                  >
                    <img
                      className="img"
                      src="assets/images/burger.jpeg"
                      alt="Burger"
                      height="350px"
                      width="350px"
                      style={styleImage}
                    />
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                      Burgers
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-4 justify-content-center text-center"
                    onMouseOver={this.handleHover.bind(null, true)}
                    onMouseOut={this.handleHover.bind(null, false)}
                  >
                    <img
                      className="img"
                      src="assets/images/special.jpeg"
                      alt="Specials"
                      height="350px"
                      width="350px"
                      style={styleImage}
                    />
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                      Specials
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Motion>
      </div>
    );
  }
}
