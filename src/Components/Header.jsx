import {useState} from 'react';
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
                        <a className="navbar-item" href="/">Home</a>
                        <a className="navbar-item" href="./staff.html">Server Staff</a>
                        <a className="navbar-item" href="./contact.html">Contact Us</a>
                        <a className="navbar-item" href="./sharing_code.html">Sharing Code</a>
                        <a className="navbar-item" href="./how_to_ask_for_help.html">Getting Help</a>
                        <a className="navbar-item" href="./faqs.html">FAQs</a>
                    </div> 
                </div>
            </nav>
        </header>
    )
};
