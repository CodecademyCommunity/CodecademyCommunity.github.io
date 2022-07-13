import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/codecademy_logo.png';
import useCloseBurgerMenu from '../hooks/useCloseBurgerMenu';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const wrapperRef = useRef(null);
  useCloseBurgerMenu(wrapperRef, () => setIsActive(false));

  function handleNavigate() {
    setIsActive(false);
  }

  return (
    <header ref={wrapperRef}>
      <nav className="navbar has-shadow has-background-primary is-fixed-top">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/" onClick={handleNavigate}>
            <img src={logo} alt="The codecademy logo" className="logo" />
          </Link>
          <button
            onClick={() => setIsActive(!isActive)}
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-items"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
          id="navbar-items"
        >
          <div className="navbar-end">
            <Link className="navbar-item" to="/" onClick={handleNavigate}>
              Home
            </Link>
            <Link className="navbar-item" to="/staff" onClick={handleNavigate}>
              Server Staff
            </Link>
            <Link
              className="navbar-item"
              to="/contact"
              onClick={handleNavigate}
            >
              Contact Us
            </Link>
            <Link
              className="navbar-item"
              to="/sharing-code"
              onClick={handleNavigate}
            >
              Sharing Code
            </Link>
            <Link
              className="navbar-item"
              to="/getting-help"
              onClick={handleNavigate}
            >
              Getting Help
            </Link>
            <Link
              className="navbar-item"
              to="/resources"
              onClick={handleNavigate}
            >
              Resources
            </Link>
            <Link className="navbar-item" to="/faq" onClick={handleNavigate}>
              FAQ
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
