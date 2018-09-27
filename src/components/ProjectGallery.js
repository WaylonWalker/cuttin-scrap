import React from "react";
import { Link } from "gatsby";
import ProjectGalleryItem from "../components/ProjectGalleryItem";

const ProjectGallery = props => {
  return (
    <div className="projectGalleryWrapper">
      <div className="projectTitleWrapper">
        <div className="bar" />
        <h1>Projects</h1>
        <div className="bar" />
      </div>
      <section className="projectGallery">
        {props.posts.map(({ node: post }) => (
          <ProjectGalleryItem post={post} key={post.id} />
        ))}
      </section>
    </div>
  );
};

export default ProjectGallery;
