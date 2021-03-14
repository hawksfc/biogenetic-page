import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon as FontIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="caja">
            <div className="bio-green pl-0 pr-0"></div>
            <div className="bio-dark row mr-0 ml-0">
                <div className="col pl-2">
                    <h3 className="ml-4 mt-4 align-center">Menu</h3>
                    <ul className="list-none mt-2 list-nav">
                        <li className="mb-2">
                            <Link to="/biogenetic-page/">Inicio</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/biogenetic-page/services">Servicios</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/biogenetic-page/my-jobs">Mis Trabajos</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/biogenetic-page/events">Eventos</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/biogenetic-page/contact">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h3 className="ml-4 mt-4 align-center">Contacto</h3>
                    <ul className="list-none mt-3 list-nav">
                        <li className="social-media-2 mb-3">
                            <a href="https://www.facebook.com/biogenetictrainigsystems" target="_blank" rel="noreferrer">
                                <FontIcon icon={faFacebook} size="lg" className="mr-2"/>
                                Facebook
                            </a>
                        </li>
                        <li className="social-media-2 mb-3">
                            <a href="https://instagram.com/jesus_camdesant?iqshid=1a9d281zbo2q3" target="_blank" rel="noreferrer">
                                <FontIcon icon={faInstagram} size="lg" className="mr-2"/>
                                Instagram
                            </a>
                        </li>
                        <li className="social-media-2 mb-3">
                            <a href="https://api.whatsapp.com/send?phone=+524921116947" target="_blank" rel="noreferrer">
                                <FontIcon icon={faWhatsapp} size="lg" className="mr-2"/>
                                Whatsapp
                            </a>
                        </li>
                        <li className="social-media-2 mb-3">
                            <a href="mailto:biogenetictrainingsystems@gmail.con">
                                <FontIcon icon={faEnvelope} size="lg" className="mr-2"/>
                                Email
                            </a>
                        </li>
                        <li className="social-media-2 mb-3">
                            <a href="tel:+524921116947">
                                <FontIcon icon={faPhoneAlt} size="lg" className="mr-2"/>
                                Llamanos
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row bio-dark pl-0 pr-0 mr-0 ml-0">
                <div className="col copyright mt-2">
                    <p className="text-center align-middle">Copyright <i class="fa fa-copyright" aria-hidden="true"></i> Biogenetic All Right Reserved<br/>Powered by CreActive Designs</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
