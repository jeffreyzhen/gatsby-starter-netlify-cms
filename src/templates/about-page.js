import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";
import kyle from "../../static/images/kyle-thumb.jpg";
import cta from "../../static/images/about-ctas-user-pic.png";
import hiring from "../../static/images/about-ctas-hiring-pic.png";

import "../layouts/css/about.css";

export const AboutPageTemplate = ({ hero, section1 }) => {
  return (
    <div id="wrapper" className="about clear-header" style={{ opacity: 1 }}>
      <section className="hero-wrapper">
        <figure className="fig-wrapper">
          <div className="img-wrapper">
            <picture>
              <img
                className="hero-thumbnail"
                src={hero.image.image}
                alt={hero.image.alt}
              />
            </picture>
          </div>
          <div className="overlay" />
          <div className="container desc-wrapper">
            <h1 className="page-header">{hero.title}</h1>
            <p>{hero.paragraph1}</p>
            <p>{hero.paragraph2}</p>
            <p>{hero.paragraph3}</p>
            <p>{hero.paragraph4}</p>
          </div>
        </figure>
      </section>

      <section className="page-section">
        <div className="container">
          <h2 className="section-header">
            <span>{section1.heading}</span>
          </h2>
          <div className="section-content">
            <div className="col-sm-6 no-padding-mobile no-padding-left img-wrapper">
              <picture>
                <img
                  className="rd-corner"
                  src={section1.image.image}
                  alt={section1.image.alt}
                />
              </picture>
            </div>
            <div className="col-sm-6 no-padding-mobile no-padding-right align-right">
              {section1.content}
            </div>
            <div className="col-sm-6 col-lg-12">
              <blockquote>
                {section1.quote.quote}
                <footer>
                  {section1.quote.name} <span>{section1.quote.title}</span>
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

// AboutPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func
// };

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <AboutPageTemplate intro={frontmatter.hero} main={frontmatter.section1} />
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
        hero {
          title
          image {
            image
            alt
          }
          paragraph1
          paragraph2
          paragraph3
          paragraph4
        }
        section1 {
          heading
          image {
            image
            alt
          }
          content
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
