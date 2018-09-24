import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";

export default () => {
  return (
    <Layout>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>
        Things are starting to line up, and tomorrow is the day I meet with the
        surgeon. Wyatt is going to start all day preschool to try and help him
        get things under control. I'm feeling very overwhelmed. I don't even
        knowing which way to think. All I can do is curl up in a ball and melt.
        Not feeling an ounce of that strength everyone keeps talking about.
        Right now all I feel is a frightening thought of the days ahead. My baby
        going to school, the MRI, the surgery, the recovery, the fear of pain. I
        don't have strength. Right now I am a puddle, and a hundreds of people
        are splashing me in every direction, but my tears replenish the puddle
        faster than people can take them away. I'm hurting physically, and
        emotionally.
      </p>
      <blockquote>
        Right now all I feel is a frightening thought of the days ahead
      </blockquote>
      <Link to="/">Home</Link>
    </Layout>
  );
};
