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

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div id="wrapper" className="about clear-header" style={{ opacity: 1 }}>
      <section className="hero-wrapper">
        <figure className="fig-wrapper">
          <div className="img-wrapper">
            <picture>
              <source media="(max-width: 991px)" srcSet={introMedium} />
              <source media="(max-width: 992px)" srcSet={introLarge} />
              <img className="hero-thumbnail" src={introLarge} alt="HomeHero" />
            </picture>
          </div>
          <div className="overlay" />
          <div className="container desc-wrapper">
            <h1 className="page-header">About Us</h1>
            <p>
              HomeHero is a licensed non-medical home care provider that
              leverages smart technology and human compassion to extend the
              health system into the home.
            </p>
            <p>
              We cater to individual families seeking assistance in the home and
              we empower health systems to launch, operate and grow their own
              branded non-medical home care programs.
            </p>
            <p>
              With hundreds of bonded and insured “Heroes”, HomeHero has become
              one of the largest and most trusted home care providers in
              California, having provided more than 1 million hours of care to
              thousands of families.
            </p>
            <p>
              HomeHero was named the #1 Employment Website at the 2014 Webby
              Awards and both its founders were named to Forbes “30 Under 30”
              list in Healthcare in 2016.
            </p>
          </div>
        </figure>
      </section>

      <section className="page-section">
        <div className="container">
          <h2 className="section-header">
            <span>Company History</span>
          </h2>
          <div className="section-content">
            <div className="col-sm-6 no-padding-mobile no-padding-left img-wrapper">
              <picture>
                <source media="(max-width: 767px)" srcSet={foundersSmall} />
                <source media="(min-width: 768px)" srcSet={founders} />
                <img className="rd-corner" src={founders} alt="" />
              </picture>
            </div>
            <div className="col-sm-6 no-padding-mobile no-padding-right align-right">
              <p>
                Founders{" "}
                <a
                  href="https://twitter.com/mikettownsend"
                  alt="Mike Townsend"
                  target="_blank"
                >
                  Mike Townsend
                </a>{" "}
                and{" "}
                <a
                  href="https://twitter.com/kaleazy"
                  alt="Kyle Hill"
                  target="_blank"
                >
                  Kyle Hill
                </a>{" "}
                watched for many years the struggles their parents went through
                finding, hiring and managing caregivers for their aging
                grandparents.
              </p>
              <p>
                Kyle's father,{" "}
                <a
                  href="http://anthonyhill.org/"
                  alt="Anthony Hill"
                  target="_blank"
                >
                  Anthony Hill
                </a>, has been the primary caregiver for Kyle's grandmother for
                over a decade, while also teaching full-time as a theatre
                professor at The Ohio State University. In 2012, after a
                caregiver left his mother home alone and neglected for a full
                day, Anthony took an extended leave of absence so he could fix
                his catastrophic home care situation.
              </p>
              <p>
                These events were so disruptive that in 2013 Kyle decided to
                start a home care business with his long-time friend and
                business partner, Mike Townsend, to make home care more
                accessible, transparent and affordable for everyone. What
                started as a simple scheduling and payment app for Kyle's family
                has evolved into a robust home care platform that is
                fundamentally changing the healthcare industry. At 99-years old,
                Kyle's grandmother is HomeHero's longest-standing client.
              </p>
              <p>
                Today, HomeHero's mission is to promote health and wellness in
                the home, and help the 120 million other Americans, like Kyle's
                father, who are caring for a sick or elderly family member at
                home.
              </p>
            </div>
            <div className="col-sm-6 col-lg-12">
              <blockquote>
                The scariest thing for any family is that your loved one is left
                home alone. This is something many families deal with and it's
                not the way home care should be.
                <footer>
                  Kyle Hill <span>CEO, HomeHero</span>
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
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
