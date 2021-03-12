import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Home from './components/Home';
import logo from './img/logos/logo_biogenetic.png';
import { FontAwesomeIcon as FontIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Footer from "./components/Footer";


function App() {

  const [menu, viewMenu] = useState(false);
  const [showMenu, setShowMenu] = useState('contraido');

  const toggleMenu = () => {
    console.log(menu);
    if (menu){
      setShowMenu("contraido");
      viewMenu(false);
    }else{
      setShowMenu("expandido");
      viewMenu(true);
    }
    console.log(screen.width);
    
  }



  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bio-dark">
          <Link to="/" className="navbar-brand ml-1"><img width="100" src={logo} alt="Logo"/></Link>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse expanding navbar-collapse show ${showMenu}`} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ml-1 mr-1" onClick={screen.width < 992 ? toggleMenu : null}>
                <Link to="biogenetic-page/build/" className="text-success btn btn-outline-success mt-1 btn-block">Home</Link>
              </li>
              <li className="nav-item ml-1 mr-1" onClick={screen.width < 992 ? toggleMenu : null}>
                <Link to="biogenetic-page/build/services" className="text-success btn btn-outline-success mt-1 btn-block">Servicios</Link>
              </li>
              <li className="nav-item ml-1 mr-1" onClick={screen.width < 992 ? toggleMenu : null}>
                <Link to="biogenetic-page/build/contact" className="text-success btn btn-outline-success mt-1 btn-block">Contacto</Link>
              </li>
              <ul className="social-media-horizontal">
                <li className="social-media">
                  <a href="https://www.facebook.com/biogenetictrainingsystems" target="_blank" ><FontIcon icon={faFacebook} size="2x"/></a>
                </li>
                <li className="social-media">
                  <a href="https://instagram.com/jesus_camdesant?iqshid=1a9d281zbo2q3" target="_blank" ><FontIcon icon={faInstagram} size="2x"/></a>
                </li>
                <li className="social-media social-media-end">
                  <a href="https://api.whatsapp.com/send?phone=+524921116947" target="_blank" ><FontIcon icon={faWhatsapp} size="2x"/></a>
                </li>
              </ul>
            </ul>
          </div>
        </nav>
        <div className="bio-green"></div>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <h2>Servicios</h2>
          </Route>
          <Route exact path="/contact">
            <h2>Contacto</h2>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
