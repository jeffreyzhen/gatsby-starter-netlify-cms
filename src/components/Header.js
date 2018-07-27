import React from "react";

const Header = ({ siteTitle }) => (
  <header id="header">
    <div className="container-fluid main-header">
      <div className="col-sm-4 col-xs-2 logo-container">
        <a href="/" className="hh-logo-wrapper responsive">
          {/* {% include "../public/img/logos/homehero/logo.svg" ignore missing %} */}
        </a>
      </div>

      <div className="col-sm-8 col-xs-10 nav-container">
        <nav className="navbar navbar-static-top" role="navigation">
          <ul className="nav navbar-nav">
            <li className="hidden-xs">
              <a href="/about">About</a>
            </li>
            <li className="hidden-xs">
              <a href="/trust?href=header">Trust</a>
            </li>
            <li className="hidden-xs">
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
