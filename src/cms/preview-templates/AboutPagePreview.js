import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(["data", "title"])}
    intro={{
      image: {
        image: getAsset(entry.getIn(["data", "intro", "image", "image"])),
        alt: entry.getIn(["data", "intro", "image", "alt"])
      },
      blurb1: entry.getIn(["data", "intro", "blurb1"]),
      blurb2: entry.getIn(["data", "intro", "blurb2"]),
      blurb3: entry.getIn(["data", "intro", "blurb3"]),
      blurb4: entry.getIn(["data", "intro", "blurb4"])
    }}
    main={{
      heading: entry.getIn(["data", "main", "heading"]),
      image: {
        image: getAsset(entry.getIn(["data", "main", "image", "image"])),
        alt: entry.getIn(["data", "main", "image", "alt"])
      },
      description: entry.getIn(["data", "main", "description"]),
      quote: {
        quote: entry.getIn(["data", "main", "quote", "quote"]),
        name: entry.getIn(["data", "main", "quote", "name"]),
        title: entry.getIn(["data", "main", "quote", "title"])
      }
    }}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutPagePreview;
