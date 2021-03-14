import React, { useState } from 'react';
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
    console.log(window.screen.width);
    
  }


  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bio-dark m-0 p-0">
          <Link to="/biogenetic-page/" className="navbar-brand ml-1"><img width="100" src={logo} alt="Logo"/></Link>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse expanding navbar-collapse show ${showMenu}`} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ml-1 mr-1" onClick={window.screen.width < 992 ? toggleMenu : null}>
                <Link to="/biogenetic-page/" className="text-success btn btn-outline-success mt-1 btn-block">Home</Link>
              </li>
              <li className="nav-item ml-1 mr-1" onClick={window.screen.width < 992 ? toggleMenu : null}>
                <Link to="/biogenetic-page/services" className="text-success btn btn-outline-success mt-1 btn-block">Servicios</Link>
              </li>
              <li className="nav-item ml-1 mr-1" onClick={window.screen.width < 992 ? toggleMenu : null}>
                <Link to="/biogenetic-page/my-jobs" className="text-success text-nowrap btn btn-outline-success mt-1 btn-block">Mi Trabajo</Link>
              </li>
              <li className="nav-item ml-1 mr-1" onClick={window.screen.width < 992 ? toggleMenu : null}>
                <Link to="/biogenetic-page/events" className="text-success btn btn-outline-success mt-1 btn-block">Eventos</Link>
              </li>
              <li className="nav-item ml-1 mr-1" onClick={window.screen.width < 992 ? toggleMenu : null}>
                <Link to="/biogenetic-page/contact" className="text-success btn btn-outline-success mt-1 btn-block">Contacto</Link>
              </li>
              <ul className="social-media-horizontal">
                <li className="social-media">
                  <a href="https://www.facebook.com/biogenetictrainigsystems" target="_blank" rel="noreferrer"><FontIcon icon={faFacebook} size="2x"/></a>
                </li>
                <li className="social-media">
                  <a href="https://instagram.com/jesus_camdesant?iqshid=1a9d281zbo2q3" target="_blank" rel="noreferrer"><FontIcon icon={faInstagram} size="2x"/></a>
                </li>
                <li className="social-media social-media-end">
                  <a href="https://api.whatsapp.com/send?phone=+524921116947" target="_blank" rel="noreferrer"><FontIcon icon={faWhatsapp} size="2x"/></a>
                </li>
              </ul>
            </ul>
          </div>
        </nav>
        <div className="bio-green"></div>
        <Switch>
          <Route exact path="/biogenetic-page/">
            <Home></Home>
          </Route>
          <Route exact path="/biogenetic-page/services">
            <h2>Servicios</h2>
          </Route>
          <Route exact path="/biogenetic-page/my-jobs">
            <h2>Mi Trabajo</h2>
          </Route>
          <Route exact path="/biogenetic-page/events">
            <h2>Eventos</h2>
          </Route>
          <Route exact path="/biogenetic-page/contact">
            <h2>Contacto</h2>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
