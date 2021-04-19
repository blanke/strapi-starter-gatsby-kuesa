import React from "react"
import Moment from "react-moment"
import Layout from "../components/layout"
import PageIntro from "../components/pageIntro"
import "../assets/css/main.css"
import "../assets/css/astridStyleInline.css"

const Page = ({ data }) => {
    const page = data.strapiPage;
    let article = data.allStrapiArticle.nodes.filter(article => {
      return article.strapiId === page.content[0].article?.id;
    });
    if (article?.length === 1) article = article[0];
    const seo = {
      metaTitle: article.title,
      metaDescription: article.description,
      shareImage: article.image?.publicURL,
      article: true,
    };
  return (
    <Layout seo={seo}>
      <PageIntro title={article.title} subtitle={article.description} image={article.image}/>
      <div>
        <div className="uk-section">
          <div className="uk-container uk-container-small">

            <hr className="uk-divider-small" />

            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  By {article.author?.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query PageQuery($friendlyUrl: String!) {
    strapiPage(friendlyUrl: {eq: $friendlyUrl}) {
      id
      parent {
        id
      }
      content {
        id
        article {
          id
        }
      }
      strapiId
    }
    allStrapiArticle {
      nodes {
        author {
          name
        }
        content {
          content
          headline
          type
          position
          part
          id
        }
        strapiId
        title
        description
        image {
          publicURL
        }
        published_at
      }
    }
  }
`;

export default Page; 
