import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Biography from "./pages/Biography";
import Contacts from "./pages/Contacts";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faPhoneSquare,faAt,faUser} from '@fortawesome/free-solid-svg-icons';


import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap"

import "./App.css";


library.add(fab, faPhoneSquare, faAt,faUser);

function App() {
  return (
    <Router>
      <div  >
        <Container  >
          
            <Switch>
              <Route path="/contacts">
                <Navbar activePage="contacts"/>
                <Wrapper>
                  <Contacts />
                </Wrapper>
              </Route>
              <Route path="/portfolio">
                <Navbar activePage="portfolio"/>
                <Wrapper>
                  <Portfolio />
                </Wrapper>
                
              </Route>
              <Route path="/">
                <Navbar activePage="home"/>
                <Wrapper>
                  <Biography />
                </Wrapper>
                
              </Route>
            </Switch>
       
          
          
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
