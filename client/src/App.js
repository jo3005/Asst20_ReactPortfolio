import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Biography from "./pages/Biography";
import Contacts from "./pages/Contacts";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";



import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap"

import "./App.css";

function App() {
  return (
    <Router>
      <div className="am_background" >
        <Container  >
          <Navbar />
          <Wrapper>
            <Switch>
              <Route path="/contacts">
                <Contacts />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
                <Biography />
              </Route>
            </Switch>
       
          
          </Wrapper>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
