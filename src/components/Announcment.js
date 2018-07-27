import React from "react";

const Announcement = () => (
  <blockquote className="messages announcement">
    <span className="icon-bell awe-bell" />
    <strong>Notice!</strong> HomeHero is no longer accepting new clients or
    caregivers as of February 24th, 2017.
    <a
      href="https://medium.com/@kaleazy/theres-no-magic-in-venture-backed-home-care-8f5389528279"
      className="btn-link"
      target="_blank"
    >
      Learn More
    </a>
  </blockquote>
);

export default Announcement;
