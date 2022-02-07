import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/img/codecademy_logo.png';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  function handleNavigate() {
    setIsActive(false);
    window.scroll({ top: 0, left: 0 });
  }

  return (
    <header>
      <nav className="navbar has-shadow has-background-primary is-fixed-top">
        <div className="navbar-brand">
          <Link className="navbar-item" href="/" onClick={handleNavigate}>
            <a><Image src={logo} alt="The codecademy logo" className="logo" /></a>
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
            <Link className="navbar-item" href="/" onClick={handleNavigate}>
              <a>Home</a>
            </Link>
            <Link className="navbar-item" href="/staff" onClick={handleNavigate}>
              <a>Server Staff</a>
            </Link>
            <Link
              className="navbar-item"
              href="/contact"
              onClick={handleNavigate}
            >
              <a>Contact Us</a>
            </Link>
            <Link
              className="navbar-item"
              href="/sharing-code"
              onClick={handleNavigate}
            >
              <a>Sharing Code</a>
            </Link>
            <Link
              className="navbar-item"
              href="/getting-help"
              onClick={handleNavigate}
            >
              <a>Getting Help</a>
            </Link>
            <Link className="navbar-item" href="/faq" onClick={handleNavigate}>
              <a>FAQ</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
