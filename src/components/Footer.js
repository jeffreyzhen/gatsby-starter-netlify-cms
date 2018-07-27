import React from "react";
// import svgLoader from '../assets/utils/svgLoader';
// import logo from '../assets/img/logos/homehero/logo.png';
// const logo = svgLoader[`./logo.svg`];

const Footer = () => (
  <footer id="footer">
    <div className="hidden">
      <a href="http://pilatesconnectionla.com">
        Pilates for Venice, Marina del Rey, Playa del Rey, Del Mar, Culver City
        and more
      </a>
      <a href="http://filefly.io">Sell your digital files</a>
    </div>
    <div className="container footer-cta-container">
      <div className="footer-cta-wrapper">
        <a href="/" className="hh-logo-wrapper icon-part">
          <div>{/* <img src={logo} alt="logo" /> */}</div>
        </a>
        <p>HomeHero is the #1 home care provider in California</p>
      </div>
    </div>
    <div className="footer-menu-container">
      <div className="container footer-menu-main">
        <nav className="col-md-8 no-padding">
          <ul className="footer-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/trust?href=footer">Trust</a>
            </li>
            <li>
              <a href="/enterprise">Enterprise</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/help-center">Help</a>
            </li>
            <li>
              <a href="/apps">Apps</a>
            </li>
            <li>
              <a href="/media-kit">Media</a>
            </li>
          </ul>
        </nav>
        <div className="col-lg-offset-1 col-lg-3 col-md-4 no-padding-right">
          <div className="footer-contact-info">
            <p>
              <a href="tel:310-907-5302" className="phone">
                310.907.5302
              </a>
            </p>
            <p>Santa Monica, CA</p>
          </div>
        </div>
      </div>
      <div className="container footer-menu-secondary clearfix">
        <div className="disclaimer-wrapper col-sm-7 no-padding clearfix">
          <p className="col-sm-7 no-padding">
            Copyright &copy; 2018 HomeHero, Inc.<br />CA Licensed HCO
            #194700323.<br />All Rights Reserved.
          </p>
          <ul className="footer-nav col-sm-5 no-padding">
            <li>
              <a href="/help-center/legal/terms-of-use">Terms of Use</a>
            </li>
            <li>
              <a href="/help-center/legal/privacy-policy">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="social-links-wrapper col-sm-5 no-padding">
          <ul className="footer-nav social-links">
            <li>
              <a href="https://www.facebook.com/HomeHero/">
                <i className="icon icon-facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/homehero">
                <i className="icon icon-twitter" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/homehero">
                <i className="icon icon-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCiL9YPp424wdicuTwBdhd-A">
                <i className="icon icon-youtube-play" />
              </a>
            </li>
            <li>
              <a href="https://www.yelp.com/biz/homehero-los-angeles">
                <i className="icon icon-yelp" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="scroll-top">
      <i className="icon icon-up-open" />
    </div>
  </footer>
);
export default Footer;
