import {useState} from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/img/codecademy_logo.png";

export const Header = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <header>
            <nav className="navbar has-shadow has-background-primary is-fixed-top">
                <div className="navbar-brand">
                    <a className="navbar-item" href="index.html"><img src={logo} alt="The codecademy logo" className="logo" /></a>
                    <a 
                        onClick={() => setIsActive(!isActive)} 
                        role="button"
                        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar-items"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={`navbar-menu ${isActive ? "is-active" : ""}`} id="navbar-items">
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/">Home</Link>
                        <Link className="navbar-item" to="/staff">Server Staff</Link>
                        <Link className="navbar-item" to="/contact">Contact Us</Link>
                        <Link className="navbar-item" to="/sharing-code">Sharing Code</Link>
                        <Link className="navbar-item" to="/getting-help">Getting Help</Link>
                        <Link className="navbar-item" to="/faq">FAQ</Link>
                    </div> 
                </div>
            </nav>
        </header>
    )
};
