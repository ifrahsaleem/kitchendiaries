import React, { Component } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import AboutPage from "./pages/about";
import HomePage from './pages/homepage';
import ContactPage from './pages/contact';
import "./App.css";



class App extends Component {
 



  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
            
            <Switch>
              <Route path="/home" exact  component={HomePage} />
            </Switch>
            
            <Switch>
              <Route path="/about" exact component={AboutPage} />
            </Switch>

            <Switch>
              <Route path="/Contactus" exact component={ContactPage} />
            </Switch>

            <Redirect to="/home"/>

          
           <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
