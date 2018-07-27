import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";
import introMedium from "../../static/images/about-intro-bg-md.jpg";
import introLarge from "../../static/images/about-intro-bg-lg.jpg";
import foundersSmall from "../../static/images/about-founders-sm.jpg";
import founders from "../../static/images/about-founders.jpg";
import kyle from "../../static/images/kyle-thumb.jpg";
import cta from "../../static/images/about-ctas-user-pic.png";
import hiring from "../../static/images/about-ctas-hiring-pic.png";

import "../layouts/css/about.css";

export const AboutPageTemplate = ({ title, intro, main }) => {
  return (
    <div id="wrapper" className="about clear-header" style={{ opacity: 1 }}>
      <section className="hero-wrapper">
        <figure className="fig-wrapper">
          <div className="img-wrapper">
            <picture>
              {/* <source media="(max-width: 991px)" srcSet={introMedium} />
              <source media="(max-width: 992px)" srcSet={introLarge} /> */}
              <img
                className="hero-thumbnail"
                src={intro.image.image}
                alt={intro.image.alt}
              />
            </picture>
          </div>
          <div className="overlay" />
          <div className="container desc-wrapper">
            <h1 className="page-header">{title}</h1>
            <p>{intro.blurb1}</p>
            <p>{intro.blurb2}</p>
            <p>{intro.blurb3}</p>
            <p>{intro.blurb4}</p>
          </div>
        </figure>
      </section>

      <section className="page-section">
        <div className="container">
          <h2 className="section-header">
            <span>{main.heading}</span>
          </h2>
          <div className="section-content">
            <div className="col-sm-6 no-padding-mobile no-padding-left img-wrapper">
              <picture>
                {/* <source media="(max-width: 767px)" srcSet={foundersSmall} />
                <source media="(min-width: 768px)" srcSet={founders} /> */}
                <img
                  className="rd-corner"
                  src={main.image.image}
                  alt={main.image.alt}
                />
              </picture>
            </div>
            <div className="col-sm-6 no-padding-mobile no-padding-right align-right">
              {main.description}
            </div>
            <div className="col-sm-6 col-lg-12">
              <blockquote>
                {main.quote.quote}
                <footer>
                  {main.quote.name} <span>{main.quote.title}</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section video">
        <div className="container">
          <figure>
            <a
              href="https://vimeo.com/138795997"
              id="homeHero-about-us"
              className="fresco vimeo-video hidden-xs"
              data-fresco-options="width:820,vimeo:{autoplay:1,portrait:1}"
            >
              <img src={kyle} alt="HomeHero About Us" />
            </a>
            <div className="video-wrapper mobile">
              <iframe
                title="kyle talks"
                src="https://player.vimeo.com/video/138795997?autoplay=0"
                className="mobile-video"
                height="170"
                frameBorder="0"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="page-section about-us-hq">
        <div className="container">
          <h2 className="section-header">
            <span>HomeHero Regions</span>
          </h2>
          <div className="section-content">
            <div className="col-md-6 col-xs-12">
              <p>
                HomeHero is headquartered in Santa Monica, CA and we proudly
                serve families in Los Angeles, Orange County, San Diego and the
                San Francisco Bay Area.
              </p>
              <p>
                Keep up with local events in your city by following us on{" "}
                <a href="https://www.facebook.com/HomeHero">Facebook</a> and{" "}
                <a href="https://twitter.com/homehero">Twitter</a>.
              </p>
              <div className="col-md-6 col-xs-12 about-us-hq-links">
                <a href="#LosAngelesMap" className="map-switch active">
                  <h6>Los Angeles</h6>
                </a>
              </div>
              <div className="col-md-6 col-xs-12 about-us-hq-links">
                <a href="#OrangeCountyMap" className="map-switch">
                  <h6>Orange County</h6>
                </a>
              </div>
              <div className="col-md-6 col-xs-12 about-us-hq-links">
                <a href="#SanFranciscoMap" className="map-switch">
                  <h6>San Francisco</h6>
                </a>
              </div>
              <div className="col-md-6 col-xs-12 about-us-hq-links">
                <a href="#SanDiegoMap" className="map-switch">
                  <h6>San Diego</h6>
                </a>
              </div>
            </div>
            <div id="map" className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div id="LosAngelesMap" className="map-box" />
              <div id="OrangeCountyMap" className="map-box hidden" />
              <div id="SanFranciscoMap" className="map-box hidden" />
              <div id="SanDiegoMap" className="map-box hidden" />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section about-us-ctas">
        <div className="container about-us-ctas-container">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="about-us-ctas-icon-holder">
              <img src={hiring} alt="HomeHero Hiring" />
            </div>
            <h3>Join Our Team</h3>
            <p>We're always looking for amazing people.</p>
            <a className="btn-sub" href="https://angel.co/homehero/jobs">
              Job Listings
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="about-us-ctas-icon-holder">
              <img src={cta} alt="HomeHero User" />
            </div>
            <h3>Find A Hero</h3>
            <p>Start your care search today.</p>
            <a className="btn-sub" href="/care-finder">
              Find a Hero
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <AboutPageTemplate
      title={frontmatter.title}
      intro={frontmatter.intro}
      main={frontmatter.main}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        intro {
          image {
            image
            alt
          }
          blurb1
          blurb2
          blurb3
          blurb4
        }
        main {
          heading
          image {
            image
            alt
          }
          description
          quote {
            quote
            name
            title
          }
        }
      }
    }
  }
`;
