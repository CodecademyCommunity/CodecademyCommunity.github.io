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
    window.scroll({ top: 0, left: 0 });
  }

  return (
    <header ref={wrapperRef}>
      <nav className="navbar has-shadow has-background-primary is-fixed-top">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/" onClick={handleNavigate}>
            <img src={logo} alt="The codecademy logo" className="logo" />
          </Link>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            onClick={() => setIsActive(!isActive)}
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-items"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
          id="navbar-items"
        >
          <div className="navbar-end">
            <Link className="navbar-item" to="/" onClick={handleNavigate}>
              Home
            </Link>
            <Link
              className="navbar-item"
              to="/staff"
              data-testid="server-staff-link"
              onClick={handleNavigate}
            >
              Server Staff
            </Link>
            <Link
              className="navbar-item"
              to="/contact"
              data-testid="contact-us-link"
              onClick={handleNavigate}
            >
              Contact Us
            </Link>
            <Link
              className="navbar-item"
              to="/sharing-code"
              data-testid="sharing-code-link"
              onClick={handleNavigate}
            >
              Sharing Code
            </Link>
            <Link
              className="navbar-item"
              to="/getting-help"
              data-testid="getting-help-link"
              onClick={handleNavigate}
            >
              Getting Help
            </Link>
            <Link
              className="navbar-item"
              to="/resources"
              data-testid="resources-link"
              onClick={handleNavigate}
            >
              Resources
            </Link>
            <Link
              className="navbar-item"
              to="/faq"
              data-testid="faq-link"
              onClick={handleNavigate}
            >
              FAQ
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
