import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor, getAsset }) => (
  <AboutPageTemplate
    hero={{
      title: entry.getIn(["data", "hero", "title"]),
      image: {
        image: getAsset(entry.getIn(["data", "hero", "image", "image"])),
        alt: entry.getIn(["data", "hero", "image", "alt"])
      },
      paragraph1: entry.getIn(["data", "hero", "paragraph1"]),
      paragraph2: entry.getIn(["data", "hero", "paragraph2"]),
      paragraph3: entry.getIn(["data", "hero", "paragraph3"]),
      paragraph4: entry.getIn(["data", "hero", "paragraph4"])
    }}
    section1={{
      heading: entry.getIn(["data", "section1", "heading"]),
      image: {
        image: getAsset(entry.getIn(["data", "section1", "image", "image"])),
        alt: entry.getIn(["data", "section1", "image", "alt"])
      },
      content: widgetFor("content"),
      quote: {
        quote: entry.getIn(["data", "section1", "quote", "quote"]),
        name: entry.getIn(["data", "section1", "quote", "name"]),
        title: entry.getIn(["data", "section1", "quote", "title"])
      }
    }}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func
};

export default AboutPagePreview;
