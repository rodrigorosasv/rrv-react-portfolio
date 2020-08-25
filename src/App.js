import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Projectm from "./pages/Projectm"
import Itconsulting from "./pages/Itconsulting"
import Hero from "./components/Hero"
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/projectm" component={Projectm} />
        <Route exact path="/itconsulting" component={Itconsulting} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;