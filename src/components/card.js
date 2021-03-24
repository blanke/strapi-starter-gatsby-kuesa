import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Card = ({ article }) => {
  return (
    <Link to={`/article/${article.node}`} className="uk-link-reset">
      <div className="posts-layout">
        <article className="post type-post">
          <div className="uk-card-media-top">
            {article.node.image && article.node.image.childImageSharp && (
              <Img
                fixed={article.node.image.childImageSharp.fixed}
                imgStyle={{ position: "static" }}
              />
            )}
          </div>
          <div className="uk-card-body">
            <header className="entry-header entry-header-blog">
              <h2 className="entry-title" style={{color: "black"}}>
                {article.node.title}
              </h2>
              <div className="subtitle">
                <div className="entry-meta noBorder">
                  <span className="posted-on"><i className="fa fa-calendar"></i><time>{article.node.published_at}</time></span>
                  {article.node.author && (<span className="byline"><i className="fa fa-user"></i>{article.node.author.name}</span>)}
                  <span className="cat-links">0 comments</span>
                </div>
              </div>
            </header>
            <div className="entry-content entry-content-blog">
              <p>
                {article.node.description}
              </p>
              {article.node.content.map((content) => {
                return ( <div style={{width: "400px"}}><p style={{"white-space":"nowrap", "overflow": "hidden", "text-overflow": "ellipsis"}}>{content.content}</p></div> )
              })}
              <div>
                <hr className="uk-divider-small" />
                <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                  <div>
                    {article.node.author && article.node.author.picture && (
                      <Img
                        fixed={article.node.author.picture.childImageSharp.fixed}
                        imgStyle={{ position: "static", borderRadius: "50%" }}
                      />
                    )}
                  </div>
              </div>
            </div>
            </div>
          </div>
        </article>
      </div>
    </Link>
  );
};

export default Card;
