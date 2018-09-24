import React from "react";
import { Link } from "gatsby";
import ProjectNavItem from "../components/ProjectNavItem";

const ProjectNav = props => {
  return (
    <section className='ProjectNavWrapper'>
      <h2>All Projects</h2>
      <ul className="projectNav">
        {props.posts.map(({ node: post }) => (
          <ProjectNavItem post={post} key={post.id} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectNav;
