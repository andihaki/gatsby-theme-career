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

const Workplace = () => {
  const {
    site: {
      siteMetadata: { title, workplace, videoUrl }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          workplace
          videoUrl
        }
      }
    }
  `);
  return (
    <Layout>
      <CustomLayout>
        <Left>
          <video width="400" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </Left>
        <Right>
          <h1>Workplace at {title}</h1>
          <div>{workplace}</div>
        </Right>
      </CustomLayout>
    </Layout>
  );
};

export default Workplace;
