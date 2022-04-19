import React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }
      return <Img fluid={image.node.childImageSharp.fluid} alt={props.alt} {...props} />;
    }}
  />
);
export default Image;
