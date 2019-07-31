import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Vacancies from "../components/blog-posts";

const About = () => {
  const {
    site: {
      siteMetadata: { title, description, logoUrl }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          logoUrl
        }
      }
    }
  `);
  return (
    <Layout>
      <Vacancies />
    </Layout>
  );
};

export default About;
