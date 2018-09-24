import React from "react";
import { Link } from "gatsby";

const ProjectNavItem = props => {
  return (
    <li key={props.post.id}>
      <Link className="projectOverlay" to={props.post.fields.slug}>
        {props.post.frontmatter.title}
      </Link>
    </li>
  );
};

export default ProjectNavItem;
