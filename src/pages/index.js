import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlesComponent from "../components/articles";
import PageIntro from "../components/pageIntro"
import "../assets/css/main.css";
import "../assets/css/astridStyleInline.css";

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiSite.homepage.id}>
        <PageIntro title={"Posts in Category: " + data.strapiSite.blog_board.name}/>
        <ArticlesComponent articles={data.allStrapiArticle.edges} />
    </Layout>
  );
};

const query = graphql`
  query {
    strapiSite {
      baseUrl
      homepage {
        id
        title
      }
      blog_board {
        id
        name
      }
    }
    allStrapiBlogBoard {
      nodes {
        articles {
          id
        }
      }
    }
    allStrapiArticle {
      edges {
        node {
          strapiId
          title
          description
          published_at(formatString: "LL")
          content {
            content
          }
          image {
            publicURL
          }
          author {
            name
          }
        }
      }
    }
  }
`;

export default IndexPage;
