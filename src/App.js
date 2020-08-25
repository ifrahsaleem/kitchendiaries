import React, { Component } from "react";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./pages/about";
import "./App.css";
import Categories from "./components/categories";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Navbar />
          <Switch>
            <Route path="/about" exact component={About} />
          </Switch>
          <Jumbotron /> */}
          <Categories />
          {/* <Footer /> */}
          <Switch>
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
