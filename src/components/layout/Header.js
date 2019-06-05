import React from 'react';
import { Link } from 'react-router-dom';
//CSS

/* 
  Header consisting of two pages: 
    * Home (Card Challenge)
    * About
*/

const Header = () => {
  return (
    <nav
      className="nav nav-horizontal nav-header nav-large nav-sticky border"
      data-toggle="nav"
      data-responsive="true"
      style={{ maxWidth: '100vw' }}
    >
      <div className="nav-overlay" />
      <div className="nav-brand">
        <span className="dls-logo-bluebox-solid-sm flex">
          <img
            src="https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/0.4.0/package/img/logos/dls-logo-bluebox-solid.svg"
            alt="American Express"
          />
        </span>
      </div>
      <button
        className="nav-burger hidden-md-up dls-bright-blue"
        title="Close menu"
        aria-haspopup="true"
        aria-expanded="false"
      />
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
