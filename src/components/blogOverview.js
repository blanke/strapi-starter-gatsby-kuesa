import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ArticlesComponent from "../components/articles";
import "../assets/css/main.css";
import "../assets/css/astridStyleInline.css";

const BlogOverview = () => {
  const data = useStaticQuery(query);
  const articles = data.allStrapiBlogBoard.nodes[0].articles.map(article =>
        data.allStrapiArticle.nodes.filter(node => node.strapiId === article.id)[0])
  return (
        <ArticlesComponent articles={articles.reverse()} />
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
      nodes {
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
`;

export default BlogOverview;
