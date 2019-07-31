import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const CustomLayout = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Left = styled.div``;
const Right = styled.div``;

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
      <CustomLayout>
        <Left>
          <img src={logoUrl} alt={title} />
        </Left>
        <Right>
          <h1>About {title}</h1>
          <div>{description}</div>
        </Right>
      </CustomLayout>
    </Layout>
  );
};

export default About;
