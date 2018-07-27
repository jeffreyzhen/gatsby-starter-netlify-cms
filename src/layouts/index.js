import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Announcement from "../components/Announcment";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./css/index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Announcement />
    <Header />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
