import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/codecademy_logo.png';

function useOutsideCallback(ref, callback) {
  useEffect(() => {
    /**
     * Run callback if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideCallback(wrapperRef, () => setIsActive(false));

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
            <Link className="navbar-item" to="/faq" onClick={handleNavigate}>
              FAQ
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
