import React from "react";
import { Link } from "gatsby";
import ProjectGalleryItem from  '../components/ProjectGalleryItem'

const ProjectGallery = props => {
  return (
    <section className="projectGallery">
      {props.posts.map(({ node: post }) => (
        <ProjectGalleryItem post={post} key={post.id}/>
      ))}
    </section>
  );
};

export default ProjectGallery;
