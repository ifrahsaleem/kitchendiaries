import React, { Component } from "react";
import Jumbotron from "../components/jumbotron";
import Description from "../components/description";
import Footer from "../components/footer";
import Categories from "../components/categories";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <Description />
        <Categories />
      </React.Fragment>
    );
  }
}

export default HomePage;
