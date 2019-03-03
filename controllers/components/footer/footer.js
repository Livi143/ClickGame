import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="bottom">
            <ul id='footer-list'>
                <li><span><img className='logo' id="reactLogo" src="assets/images/react-logo.png"/></span> Clicky Game!</li>
                <li>© 2019 Olivia Fontanese</li>
                <li><a href="https://github.com/Livi143/ClickGame" target="blank"><span><img className='logo' src="assets/images/github.png"/></span> Github</a></li>
            </ul>
        </div>
    </footer>