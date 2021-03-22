import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlesComponent from "../components/articles";
import "../assets/css/main.css";
import "../assets/css/astridStyleInline.css";

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
        <div id="wp-custom-header" className="wp-custom-header"><img
            src="/wp-content/uploads/2020/12/defaultImage.jpg" width="2100" height="756" alt="Kuesa 3D"
            srcSet="/wp-content/uploads/2020/12/defaultImage.jpg 2100w, /wp-content/uploads/2020/12/defaultImage-300x108.jpg 300w, /wp-content/uploads/2020/12/defaultImage-1024x369.jpg 1024w, wp-content/uploads/2020/12/defaultImage-768x276.jpg 768w, wp-content/uploads/2020/12/defaultImage-1536x553.jpg 1536w, wp-content/uploads/2020/12/defaultImage-2048x737.jpg 2048w, wp-content/uploads/2020/12/defaultImage-700x252.jpg 700w, wp-content/uploads/2020/12/defaultImage-520x187.jpg 520w, wp-content/uploads/2020/12/defaultImage-360x130.jpg 360w, wp-content/uploads/2020/12/defaultImage-250x90.jpg 250w, wp-content/uploads/2020/12/defaultImage-100x36.jpg 100w"
            sizes="(max-width: 2100px) 100vw, 2100px"/></div>
        <div className="header-info">
            <div className="container">
                <h3 className="entry-title">{data.strapiHomepage.hero.title}</h3>
                <h4 className="subtitle">Boost your 3D design-to-code workflow</h4></div>
        </div>
        <div className="videoMask">
            <img src="/wp-content/themes/astrid-child/images/videoMask.png" alt="videoMask"/>
        </div>
        <ArticlesComponent articles={data.allStrapiArticle.edges} />
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            childImageSharp {
              fixed(width: 800, height: 500) {
                src
              }
            }
          }
          author {
            name
            picture {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
