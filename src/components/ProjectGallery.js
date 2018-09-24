import React from "react";
import { Link } from "gatsby";
import ProjectGalleryItem from "../components/ProjectGalleryItem";

const ProjectGallery = props => {
  return (
    <div className="projectGalleryWrapper">
      <section className="projectGallery">
        {props.posts.map(({ node: post }) => (
          <ProjectGalleryItem post={post} key={post.id} />
        ))}
      </section>
    </div>
  );
};

export default ProjectGallery;
