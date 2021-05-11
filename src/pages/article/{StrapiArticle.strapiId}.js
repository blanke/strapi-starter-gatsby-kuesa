import { graphql } from 'gatsby' 

import React from "react"
import Moment from "react-moment"
import Layout from "../../components/layout"
import PageIntro from "../../components/pageIntro"
import Part from "../../components/part"
import ArticleGimmick from "../../components/articleGimmick"
import "../../assets/css/main.css"
import "../../assets/css/astridStyleInline.css"

const ArticlePage = ({ data }) => {
    let article = data.strapiArticle
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
        <div id="content">
          {article.content.map((content, i) => {
            if (content.part)
              return <Part key={`part__` + i} part={content.part} />
            else if (content.type)
              return <ArticleGimmick key={`articleGimmik__`+ i} type={content.type} />
            return ``  
          })}
        </div>
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
    query ArticlePageQuery($strapiId: Int!) {
        strapiArticle(strapiId: {eq: $strapiId}) {
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
`;

export default ArticlePage; 
