import React from "react";
import { Link } from "gatsby";
import ProjectGalleryItem from "../components/ProjectGalleryItem";

const ProjectGallery = props => {
  return (
    <section className="project GalleryWrapper">
      <div className="project TitleWrapper">
        <div className="bar" />
        <h1>Projects</h1>
        <div className="bar" />
      </div>
      <div className="project gallery">
        {props.posts.map(({ node: post }) => (
          <ProjectGalleryItem post={post} key={post.id} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
