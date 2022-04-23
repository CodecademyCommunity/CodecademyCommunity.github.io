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
          <Link href="/" onClick={handleNavigate}>
            <a className="navbar-item"><Image src={logo} alt="The codecademy logo" className="logo" /></a>
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
            <Link href="/" onClick={handleNavigate}>
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="/staff" onClick={handleNavigate}>
              <a className="navbar-item">Server Staff</a>
            </Link>
            <Link
              href="/contact"
              onClick={handleNavigate}
            >
              <a className="navbar-item">Contact Us</a>
            </Link>
            <Link
              href="/sharing-code"
              onClick={handleNavigate}
            >
              <a className="navbar-item">Sharing Code</a>
            </Link>
            <Link
              href="/getting-help"
              onClick={handleNavigate}
            >
              <a className="navbar-item">Getting Help</a>
            </Link>
            <Link href="/faq" onClick={handleNavigate}>
              <a className="navbar-item">FAQ</a>
            </Link>
            <Link href="/discord-stats" onClick={handleNavigate}>
              <a className="navbar-item">Discord Stats</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
