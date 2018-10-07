import React from "react";
import { Link } from "gatsby";
import ProjectGalleryItem from "../components/ProjectGalleryItem";
import Social from "../components/Social"
import Contact from "../components/Contact"

const ProjectGallery = props => {
  return (
    <footer>
      <Social />
      <Contact />
    </footer>
  );
};

export default ProjectGallery;
